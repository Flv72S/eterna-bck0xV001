import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../db';
import { users, usersPro } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Richiesta ricevuta:', req.method, req.url);
  
  if (req.method !== 'POST') {
    console.log('Metodo non consentito:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Corpo della richiesta:', req.body);
    
    const {
      email,
      pin,
      nome,
      cognome,
      phone,
      profession_type,
      specialization,
      business_name,
      vat_number,
      address,
      city,
      region,
      cap,
      website,
      license_number,
      license_country,
      eterna_section
    } = req.body;

    // Verifica campi obbligatori
    if (!email || !pin || !nome || !cognome || !phone || !profession_type || !license_number || !license_country) {
      console.log('Campi obbligatori mancanti:', {
        email: !!email,
        pin: !!pin,
        nome: !!nome,
        cognome: !!cognome,
        phone: !!phone,
        profession_type: !!profession_type,
        license_number: !!license_number,
        license_country: !!license_country
      });
      return res.status(400).json({ 
        message: 'Campi obbligatori mancanti',
        required: ['email', 'pin', 'nome', 'cognome', 'phone', 'profession_type', 'license_number', 'license_country']
      });
    }

    // Verifica se l'email esiste già
    console.log('Verifica email esistente:', email);
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if (existingUser.length > 0) {
      console.log('Email già registrata:', email);
      return res.status(400).json({ message: 'Email già registrata' });
    }

    // Crea l'utente base
    console.log('Creazione nuovo utente');
    const [newUser] = await db.insert(users).values({
      email,
      pin,
      nome,
      cognome,
      ruolo: 'professionista',
      verificato_telefono: false,
      verificato_email: false
    }).returning();

    console.log('Utente creato:', newUser);

    // Crea il profilo professionista
    console.log('Creazione profilo professionista');
    await db.insert(usersPro).values({
      user_id: newUser.id,
      nome,
      cognome,
      profession_type,
      specialization,
      business_name,
      vat_number,
      address,
      city,
      region,
      cap,
      website,
      license_number,
      license_country,
      license_verified: false,
      approved_by_admin: false,
      eterna_section
    });

    console.log('Registrazione completata con successo');

    return res.status(201).json({ 
      message: 'Registrazione professionista completata con successo',
      user_id: newUser.id,
      next_steps: [
        'Verifica la tua email cliccando sul link che ti abbiamo inviato',
        'Verifica il tuo numero di telefono inserendo il codice OTP che riceverai via SMS',
        'Attendi l\'approvazione del tuo profilo da parte dell\'amministratore'
      ]
    });
  } catch (error) {
    console.error('Errore nella registrazione professionista:', error);
    return res.status(500).json({ 
      message: 'Errore interno del server',
      error: error instanceof Error ? error.message : 'Errore sconosciuto'
    });
  }
} 