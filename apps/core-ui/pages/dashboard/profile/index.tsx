import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth';
import { redirect } from 'next/navigation';
import ProfileForm from '../../../components/ProfileForm';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Il Tuo Profilo</h1>
            <p className="mt-2 text-sm text-gray-600">
              Gestisci le tue informazioni personali
            </p>
          </div>
          
          <ProfileForm />
        </div>
      </div>
    </DashboardLayout>
  );
} 