
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PetsUser
 * 
 */
export type PetsUser = $Result.DefaultSelection<Prisma.$PetsUserPayload>
/**
 * Model BabyUser
 * 
 */
export type BabyUser = $Result.DefaultSelection<Prisma.$BabyUserPayload>
/**
 * Model SoulUser
 * 
 */
export type SoulUser = $Result.DefaultSelection<Prisma.$SoulUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  PROFESSIONAL: 'PROFESSIONAL'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petsUser`: Exposes CRUD operations for the **PetsUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetsUsers
    * const petsUsers = await prisma.petsUser.findMany()
    * ```
    */
  get petsUser(): Prisma.PetsUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.babyUser`: Exposes CRUD operations for the **BabyUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BabyUsers
    * const babyUsers = await prisma.babyUser.findMany()
    * ```
    */
  get babyUser(): Prisma.BabyUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.soulUser`: Exposes CRUD operations for the **SoulUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoulUsers
    * const soulUsers = await prisma.soulUser.findMany()
    * ```
    */
  get soulUser(): Prisma.SoulUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PetsUser: 'PetsUser',
    BabyUser: 'BabyUser',
    SoulUser: 'SoulUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "petsUser" | "babyUser" | "soulUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PetsUser: {
        payload: Prisma.$PetsUserPayload<ExtArgs>
        fields: Prisma.PetsUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetsUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetsUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>
          }
          findFirst: {
            args: Prisma.PetsUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetsUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>
          }
          findMany: {
            args: Prisma.PetsUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>[]
          }
          create: {
            args: Prisma.PetsUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>
          }
          createMany: {
            args: Prisma.PetsUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetsUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>[]
          }
          delete: {
            args: Prisma.PetsUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>
          }
          update: {
            args: Prisma.PetsUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>
          }
          deleteMany: {
            args: Prisma.PetsUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetsUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetsUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>[]
          }
          upsert: {
            args: Prisma.PetsUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsUserPayload>
          }
          aggregate: {
            args: Prisma.PetsUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetsUser>
          }
          groupBy: {
            args: Prisma.PetsUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetsUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetsUserCountArgs<ExtArgs>
            result: $Utils.Optional<PetsUserCountAggregateOutputType> | number
          }
        }
      }
      BabyUser: {
        payload: Prisma.$BabyUserPayload<ExtArgs>
        fields: Prisma.BabyUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BabyUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BabyUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>
          }
          findFirst: {
            args: Prisma.BabyUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BabyUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>
          }
          findMany: {
            args: Prisma.BabyUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>[]
          }
          create: {
            args: Prisma.BabyUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>
          }
          createMany: {
            args: Prisma.BabyUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BabyUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>[]
          }
          delete: {
            args: Prisma.BabyUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>
          }
          update: {
            args: Prisma.BabyUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>
          }
          deleteMany: {
            args: Prisma.BabyUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BabyUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BabyUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>[]
          }
          upsert: {
            args: Prisma.BabyUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyUserPayload>
          }
          aggregate: {
            args: Prisma.BabyUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBabyUser>
          }
          groupBy: {
            args: Prisma.BabyUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BabyUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.BabyUserCountArgs<ExtArgs>
            result: $Utils.Optional<BabyUserCountAggregateOutputType> | number
          }
        }
      }
      SoulUser: {
        payload: Prisma.$SoulUserPayload<ExtArgs>
        fields: Prisma.SoulUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoulUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoulUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>
          }
          findFirst: {
            args: Prisma.SoulUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoulUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>
          }
          findMany: {
            args: Prisma.SoulUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>[]
          }
          create: {
            args: Prisma.SoulUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>
          }
          createMany: {
            args: Prisma.SoulUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoulUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>[]
          }
          delete: {
            args: Prisma.SoulUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>
          }
          update: {
            args: Prisma.SoulUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>
          }
          deleteMany: {
            args: Prisma.SoulUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoulUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoulUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>[]
          }
          upsert: {
            args: Prisma.SoulUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoulUserPayload>
          }
          aggregate: {
            args: Prisma.SoulUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoulUser>
          }
          groupBy: {
            args: Prisma.SoulUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoulUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoulUserCountArgs<ExtArgs>
            result: $Utils.Optional<SoulUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    petsUser?: PetsUserOmit
    babyUser?: BabyUserOmit
    soulUser?: SoulUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    pin: string | null
    name: string | null
    surname: string | null
    phone: string | null
    sector: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    pin: string | null
    name: string | null
    surname: string | null
    phone: string | null
    sector: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    pin: number
    name: number
    surname: number
    phone: number
    sector: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    pin?: true
    name?: true
    surname?: true
    phone?: true
    sector?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    pin?: true
    name?: true
    surname?: true
    phone?: true
    sector?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    pin?: true
    name?: true
    surname?: true
    phone?: true
    sector?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    pin?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    sector?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petsUser?: boolean | User$petsUserArgs<ExtArgs>
    babyUser?: boolean | User$babyUserArgs<ExtArgs>
    soulUser?: boolean | User$soulUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    pin?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    sector?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    pin?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    sector?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    pin?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    sector?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "pin" | "name" | "surname" | "phone" | "sector" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petsUser?: boolean | User$petsUserArgs<ExtArgs>
    babyUser?: boolean | User$babyUserArgs<ExtArgs>
    soulUser?: boolean | User$soulUserArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      petsUser: Prisma.$PetsUserPayload<ExtArgs> | null
      babyUser: Prisma.$BabyUserPayload<ExtArgs> | null
      soulUser: Prisma.$SoulUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      pin: string
      name: string
      surname: string
      phone: string
      sector: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petsUser<T extends User$petsUserArgs<ExtArgs> = {}>(args?: Subset<T, User$petsUserArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    babyUser<T extends User$babyUserArgs<ExtArgs> = {}>(args?: Subset<T, User$babyUserArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    soulUser<T extends User$soulUserArgs<ExtArgs> = {}>(args?: Subset<T, User$soulUserArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly sector: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.petsUser
   */
  export type User$petsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    where?: PetsUserWhereInput
  }

  /**
   * User.babyUser
   */
  export type User$babyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    where?: BabyUserWhereInput
  }

  /**
   * User.soulUser
   */
  export type User$soulUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    where?: SoulUserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PetsUser
   */

  export type AggregatePetsUser = {
    _count: PetsUserCountAggregateOutputType | null
    _avg: PetsUserAvgAggregateOutputType | null
    _sum: PetsUserSumAggregateOutputType | null
    _min: PetsUserMinAggregateOutputType | null
    _max: PetsUserMaxAggregateOutputType | null
  }

  export type PetsUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PetsUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PetsUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetsUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetsUserCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetsUserAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PetsUserSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PetsUserMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetsUserMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetsUserCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetsUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetsUser to aggregate.
     */
    where?: PetsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetsUsers to fetch.
     */
    orderBy?: PetsUserOrderByWithRelationInput | PetsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetsUsers
    **/
    _count?: true | PetsUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetsUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetsUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetsUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetsUserMaxAggregateInputType
  }

  export type GetPetsUserAggregateType<T extends PetsUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePetsUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetsUser[P]>
      : GetScalarType<T[P], AggregatePetsUser[P]>
  }




  export type PetsUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsUserWhereInput
    orderBy?: PetsUserOrderByWithAggregationInput | PetsUserOrderByWithAggregationInput[]
    by: PetsUserScalarFieldEnum[] | PetsUserScalarFieldEnum
    having?: PetsUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetsUserCountAggregateInputType | true
    _avg?: PetsUserAvgAggregateInputType
    _sum?: PetsUserSumAggregateInputType
    _min?: PetsUserMinAggregateInputType
    _max?: PetsUserMaxAggregateInputType
  }

  export type PetsUserGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: PetsUserCountAggregateOutputType | null
    _avg: PetsUserAvgAggregateOutputType | null
    _sum: PetsUserSumAggregateOutputType | null
    _min: PetsUserMinAggregateOutputType | null
    _max: PetsUserMaxAggregateOutputType | null
  }

  type GetPetsUserGroupByPayload<T extends PetsUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetsUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetsUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetsUserGroupByOutputType[P]>
            : GetScalarType<T[P], PetsUserGroupByOutputType[P]>
        }
      >
    >


  export type PetsUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petsUser"]>

  export type PetsUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petsUser"]>

  export type PetsUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petsUser"]>

  export type PetsUserSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetsUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["petsUser"]>
  export type PetsUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetsUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetsUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetsUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetsUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["petsUser"]>
    composites: {}
  }

  type PetsUserGetPayload<S extends boolean | null | undefined | PetsUserDefaultArgs> = $Result.GetResult<Prisma.$PetsUserPayload, S>

  type PetsUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetsUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetsUserCountAggregateInputType | true
    }

  export interface PetsUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetsUser'], meta: { name: 'PetsUser' } }
    /**
     * Find zero or one PetsUser that matches the filter.
     * @param {PetsUserFindUniqueArgs} args - Arguments to find a PetsUser
     * @example
     * // Get one PetsUser
     * const petsUser = await prisma.petsUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetsUserFindUniqueArgs>(args: SelectSubset<T, PetsUserFindUniqueArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetsUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetsUserFindUniqueOrThrowArgs} args - Arguments to find a PetsUser
     * @example
     * // Get one PetsUser
     * const petsUser = await prisma.petsUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetsUserFindUniqueOrThrowArgs>(args: SelectSubset<T, PetsUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetsUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserFindFirstArgs} args - Arguments to find a PetsUser
     * @example
     * // Get one PetsUser
     * const petsUser = await prisma.petsUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetsUserFindFirstArgs>(args?: SelectSubset<T, PetsUserFindFirstArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetsUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserFindFirstOrThrowArgs} args - Arguments to find a PetsUser
     * @example
     * // Get one PetsUser
     * const petsUser = await prisma.petsUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetsUserFindFirstOrThrowArgs>(args?: SelectSubset<T, PetsUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetsUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetsUsers
     * const petsUsers = await prisma.petsUser.findMany()
     * 
     * // Get first 10 PetsUsers
     * const petsUsers = await prisma.petsUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petsUserWithIdOnly = await prisma.petsUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetsUserFindManyArgs>(args?: SelectSubset<T, PetsUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetsUser.
     * @param {PetsUserCreateArgs} args - Arguments to create a PetsUser.
     * @example
     * // Create one PetsUser
     * const PetsUser = await prisma.petsUser.create({
     *   data: {
     *     // ... data to create a PetsUser
     *   }
     * })
     * 
     */
    create<T extends PetsUserCreateArgs>(args: SelectSubset<T, PetsUserCreateArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetsUsers.
     * @param {PetsUserCreateManyArgs} args - Arguments to create many PetsUsers.
     * @example
     * // Create many PetsUsers
     * const petsUser = await prisma.petsUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetsUserCreateManyArgs>(args?: SelectSubset<T, PetsUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetsUsers and returns the data saved in the database.
     * @param {PetsUserCreateManyAndReturnArgs} args - Arguments to create many PetsUsers.
     * @example
     * // Create many PetsUsers
     * const petsUser = await prisma.petsUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetsUsers and only return the `id`
     * const petsUserWithIdOnly = await prisma.petsUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetsUserCreateManyAndReturnArgs>(args?: SelectSubset<T, PetsUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetsUser.
     * @param {PetsUserDeleteArgs} args - Arguments to delete one PetsUser.
     * @example
     * // Delete one PetsUser
     * const PetsUser = await prisma.petsUser.delete({
     *   where: {
     *     // ... filter to delete one PetsUser
     *   }
     * })
     * 
     */
    delete<T extends PetsUserDeleteArgs>(args: SelectSubset<T, PetsUserDeleteArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetsUser.
     * @param {PetsUserUpdateArgs} args - Arguments to update one PetsUser.
     * @example
     * // Update one PetsUser
     * const petsUser = await prisma.petsUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetsUserUpdateArgs>(args: SelectSubset<T, PetsUserUpdateArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetsUsers.
     * @param {PetsUserDeleteManyArgs} args - Arguments to filter PetsUsers to delete.
     * @example
     * // Delete a few PetsUsers
     * const { count } = await prisma.petsUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetsUserDeleteManyArgs>(args?: SelectSubset<T, PetsUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetsUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetsUsers
     * const petsUser = await prisma.petsUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetsUserUpdateManyArgs>(args: SelectSubset<T, PetsUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetsUsers and returns the data updated in the database.
     * @param {PetsUserUpdateManyAndReturnArgs} args - Arguments to update many PetsUsers.
     * @example
     * // Update many PetsUsers
     * const petsUser = await prisma.petsUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetsUsers and only return the `id`
     * const petsUserWithIdOnly = await prisma.petsUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetsUserUpdateManyAndReturnArgs>(args: SelectSubset<T, PetsUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetsUser.
     * @param {PetsUserUpsertArgs} args - Arguments to update or create a PetsUser.
     * @example
     * // Update or create a PetsUser
     * const petsUser = await prisma.petsUser.upsert({
     *   create: {
     *     // ... data to create a PetsUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetsUser we want to update
     *   }
     * })
     */
    upsert<T extends PetsUserUpsertArgs>(args: SelectSubset<T, PetsUserUpsertArgs<ExtArgs>>): Prisma__PetsUserClient<$Result.GetResult<Prisma.$PetsUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetsUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserCountArgs} args - Arguments to filter PetsUsers to count.
     * @example
     * // Count the number of PetsUsers
     * const count = await prisma.petsUser.count({
     *   where: {
     *     // ... the filter for the PetsUsers we want to count
     *   }
     * })
    **/
    count<T extends PetsUserCountArgs>(
      args?: Subset<T, PetsUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetsUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetsUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetsUserAggregateArgs>(args: Subset<T, PetsUserAggregateArgs>): Prisma.PrismaPromise<GetPetsUserAggregateType<T>>

    /**
     * Group by PetsUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetsUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetsUserGroupByArgs['orderBy'] }
        : { orderBy?: PetsUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetsUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetsUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetsUser model
   */
  readonly fields: PetsUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetsUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetsUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PetsUser model
   */
  interface PetsUserFieldRefs {
    readonly id: FieldRef<"PetsUser", 'Int'>
    readonly userId: FieldRef<"PetsUser", 'Int'>
    readonly createdAt: FieldRef<"PetsUser", 'DateTime'>
    readonly updatedAt: FieldRef<"PetsUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PetsUser findUnique
   */
  export type PetsUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * Filter, which PetsUser to fetch.
     */
    where: PetsUserWhereUniqueInput
  }

  /**
   * PetsUser findUniqueOrThrow
   */
  export type PetsUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * Filter, which PetsUser to fetch.
     */
    where: PetsUserWhereUniqueInput
  }

  /**
   * PetsUser findFirst
   */
  export type PetsUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * Filter, which PetsUser to fetch.
     */
    where?: PetsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetsUsers to fetch.
     */
    orderBy?: PetsUserOrderByWithRelationInput | PetsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetsUsers.
     */
    cursor?: PetsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetsUsers.
     */
    distinct?: PetsUserScalarFieldEnum | PetsUserScalarFieldEnum[]
  }

  /**
   * PetsUser findFirstOrThrow
   */
  export type PetsUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * Filter, which PetsUser to fetch.
     */
    where?: PetsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetsUsers to fetch.
     */
    orderBy?: PetsUserOrderByWithRelationInput | PetsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetsUsers.
     */
    cursor?: PetsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetsUsers.
     */
    distinct?: PetsUserScalarFieldEnum | PetsUserScalarFieldEnum[]
  }

  /**
   * PetsUser findMany
   */
  export type PetsUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * Filter, which PetsUsers to fetch.
     */
    where?: PetsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetsUsers to fetch.
     */
    orderBy?: PetsUserOrderByWithRelationInput | PetsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetsUsers.
     */
    cursor?: PetsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetsUsers.
     */
    skip?: number
    distinct?: PetsUserScalarFieldEnum | PetsUserScalarFieldEnum[]
  }

  /**
   * PetsUser create
   */
  export type PetsUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * The data needed to create a PetsUser.
     */
    data: XOR<PetsUserCreateInput, PetsUserUncheckedCreateInput>
  }

  /**
   * PetsUser createMany
   */
  export type PetsUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetsUsers.
     */
    data: PetsUserCreateManyInput | PetsUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetsUser createManyAndReturn
   */
  export type PetsUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * The data used to create many PetsUsers.
     */
    data: PetsUserCreateManyInput | PetsUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetsUser update
   */
  export type PetsUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * The data needed to update a PetsUser.
     */
    data: XOR<PetsUserUpdateInput, PetsUserUncheckedUpdateInput>
    /**
     * Choose, which PetsUser to update.
     */
    where: PetsUserWhereUniqueInput
  }

  /**
   * PetsUser updateMany
   */
  export type PetsUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetsUsers.
     */
    data: XOR<PetsUserUpdateManyMutationInput, PetsUserUncheckedUpdateManyInput>
    /**
     * Filter which PetsUsers to update
     */
    where?: PetsUserWhereInput
    /**
     * Limit how many PetsUsers to update.
     */
    limit?: number
  }

  /**
   * PetsUser updateManyAndReturn
   */
  export type PetsUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * The data used to update PetsUsers.
     */
    data: XOR<PetsUserUpdateManyMutationInput, PetsUserUncheckedUpdateManyInput>
    /**
     * Filter which PetsUsers to update
     */
    where?: PetsUserWhereInput
    /**
     * Limit how many PetsUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetsUser upsert
   */
  export type PetsUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * The filter to search for the PetsUser to update in case it exists.
     */
    where: PetsUserWhereUniqueInput
    /**
     * In case the PetsUser found by the `where` argument doesn't exist, create a new PetsUser with this data.
     */
    create: XOR<PetsUserCreateInput, PetsUserUncheckedCreateInput>
    /**
     * In case the PetsUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetsUserUpdateInput, PetsUserUncheckedUpdateInput>
  }

  /**
   * PetsUser delete
   */
  export type PetsUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
    /**
     * Filter which PetsUser to delete.
     */
    where: PetsUserWhereUniqueInput
  }

  /**
   * PetsUser deleteMany
   */
  export type PetsUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetsUsers to delete
     */
    where?: PetsUserWhereInput
    /**
     * Limit how many PetsUsers to delete.
     */
    limit?: number
  }

  /**
   * PetsUser without action
   */
  export type PetsUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsUser
     */
    select?: PetsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetsUser
     */
    omit?: PetsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsUserInclude<ExtArgs> | null
  }


  /**
   * Model BabyUser
   */

  export type AggregateBabyUser = {
    _count: BabyUserCountAggregateOutputType | null
    _avg: BabyUserAvgAggregateOutputType | null
    _sum: BabyUserSumAggregateOutputType | null
    _min: BabyUserMinAggregateOutputType | null
    _max: BabyUserMaxAggregateOutputType | null
  }

  export type BabyUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BabyUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BabyUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BabyUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BabyUserCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BabyUserAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BabyUserSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BabyUserMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BabyUserMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BabyUserCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BabyUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BabyUser to aggregate.
     */
    where?: BabyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BabyUsers to fetch.
     */
    orderBy?: BabyUserOrderByWithRelationInput | BabyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BabyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BabyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BabyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BabyUsers
    **/
    _count?: true | BabyUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BabyUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BabyUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BabyUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BabyUserMaxAggregateInputType
  }

  export type GetBabyUserAggregateType<T extends BabyUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBabyUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBabyUser[P]>
      : GetScalarType<T[P], AggregateBabyUser[P]>
  }




  export type BabyUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BabyUserWhereInput
    orderBy?: BabyUserOrderByWithAggregationInput | BabyUserOrderByWithAggregationInput[]
    by: BabyUserScalarFieldEnum[] | BabyUserScalarFieldEnum
    having?: BabyUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BabyUserCountAggregateInputType | true
    _avg?: BabyUserAvgAggregateInputType
    _sum?: BabyUserSumAggregateInputType
    _min?: BabyUserMinAggregateInputType
    _max?: BabyUserMaxAggregateInputType
  }

  export type BabyUserGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: BabyUserCountAggregateOutputType | null
    _avg: BabyUserAvgAggregateOutputType | null
    _sum: BabyUserSumAggregateOutputType | null
    _min: BabyUserMinAggregateOutputType | null
    _max: BabyUserMaxAggregateOutputType | null
  }

  type GetBabyUserGroupByPayload<T extends BabyUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BabyUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BabyUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BabyUserGroupByOutputType[P]>
            : GetScalarType<T[P], BabyUserGroupByOutputType[P]>
        }
      >
    >


  export type BabyUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["babyUser"]>

  export type BabyUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["babyUser"]>

  export type BabyUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["babyUser"]>

  export type BabyUserSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BabyUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["babyUser"]>
  export type BabyUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BabyUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BabyUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BabyUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BabyUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["babyUser"]>
    composites: {}
  }

  type BabyUserGetPayload<S extends boolean | null | undefined | BabyUserDefaultArgs> = $Result.GetResult<Prisma.$BabyUserPayload, S>

  type BabyUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BabyUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BabyUserCountAggregateInputType | true
    }

  export interface BabyUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BabyUser'], meta: { name: 'BabyUser' } }
    /**
     * Find zero or one BabyUser that matches the filter.
     * @param {BabyUserFindUniqueArgs} args - Arguments to find a BabyUser
     * @example
     * // Get one BabyUser
     * const babyUser = await prisma.babyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BabyUserFindUniqueArgs>(args: SelectSubset<T, BabyUserFindUniqueArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BabyUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BabyUserFindUniqueOrThrowArgs} args - Arguments to find a BabyUser
     * @example
     * // Get one BabyUser
     * const babyUser = await prisma.babyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BabyUserFindUniqueOrThrowArgs>(args: SelectSubset<T, BabyUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BabyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserFindFirstArgs} args - Arguments to find a BabyUser
     * @example
     * // Get one BabyUser
     * const babyUser = await prisma.babyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BabyUserFindFirstArgs>(args?: SelectSubset<T, BabyUserFindFirstArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BabyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserFindFirstOrThrowArgs} args - Arguments to find a BabyUser
     * @example
     * // Get one BabyUser
     * const babyUser = await prisma.babyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BabyUserFindFirstOrThrowArgs>(args?: SelectSubset<T, BabyUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BabyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BabyUsers
     * const babyUsers = await prisma.babyUser.findMany()
     * 
     * // Get first 10 BabyUsers
     * const babyUsers = await prisma.babyUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const babyUserWithIdOnly = await prisma.babyUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BabyUserFindManyArgs>(args?: SelectSubset<T, BabyUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BabyUser.
     * @param {BabyUserCreateArgs} args - Arguments to create a BabyUser.
     * @example
     * // Create one BabyUser
     * const BabyUser = await prisma.babyUser.create({
     *   data: {
     *     // ... data to create a BabyUser
     *   }
     * })
     * 
     */
    create<T extends BabyUserCreateArgs>(args: SelectSubset<T, BabyUserCreateArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BabyUsers.
     * @param {BabyUserCreateManyArgs} args - Arguments to create many BabyUsers.
     * @example
     * // Create many BabyUsers
     * const babyUser = await prisma.babyUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BabyUserCreateManyArgs>(args?: SelectSubset<T, BabyUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BabyUsers and returns the data saved in the database.
     * @param {BabyUserCreateManyAndReturnArgs} args - Arguments to create many BabyUsers.
     * @example
     * // Create many BabyUsers
     * const babyUser = await prisma.babyUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BabyUsers and only return the `id`
     * const babyUserWithIdOnly = await prisma.babyUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BabyUserCreateManyAndReturnArgs>(args?: SelectSubset<T, BabyUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BabyUser.
     * @param {BabyUserDeleteArgs} args - Arguments to delete one BabyUser.
     * @example
     * // Delete one BabyUser
     * const BabyUser = await prisma.babyUser.delete({
     *   where: {
     *     // ... filter to delete one BabyUser
     *   }
     * })
     * 
     */
    delete<T extends BabyUserDeleteArgs>(args: SelectSubset<T, BabyUserDeleteArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BabyUser.
     * @param {BabyUserUpdateArgs} args - Arguments to update one BabyUser.
     * @example
     * // Update one BabyUser
     * const babyUser = await prisma.babyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BabyUserUpdateArgs>(args: SelectSubset<T, BabyUserUpdateArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BabyUsers.
     * @param {BabyUserDeleteManyArgs} args - Arguments to filter BabyUsers to delete.
     * @example
     * // Delete a few BabyUsers
     * const { count } = await prisma.babyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BabyUserDeleteManyArgs>(args?: SelectSubset<T, BabyUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BabyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BabyUsers
     * const babyUser = await prisma.babyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BabyUserUpdateManyArgs>(args: SelectSubset<T, BabyUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BabyUsers and returns the data updated in the database.
     * @param {BabyUserUpdateManyAndReturnArgs} args - Arguments to update many BabyUsers.
     * @example
     * // Update many BabyUsers
     * const babyUser = await prisma.babyUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BabyUsers and only return the `id`
     * const babyUserWithIdOnly = await prisma.babyUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BabyUserUpdateManyAndReturnArgs>(args: SelectSubset<T, BabyUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BabyUser.
     * @param {BabyUserUpsertArgs} args - Arguments to update or create a BabyUser.
     * @example
     * // Update or create a BabyUser
     * const babyUser = await prisma.babyUser.upsert({
     *   create: {
     *     // ... data to create a BabyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BabyUser we want to update
     *   }
     * })
     */
    upsert<T extends BabyUserUpsertArgs>(args: SelectSubset<T, BabyUserUpsertArgs<ExtArgs>>): Prisma__BabyUserClient<$Result.GetResult<Prisma.$BabyUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BabyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserCountArgs} args - Arguments to filter BabyUsers to count.
     * @example
     * // Count the number of BabyUsers
     * const count = await prisma.babyUser.count({
     *   where: {
     *     // ... the filter for the BabyUsers we want to count
     *   }
     * })
    **/
    count<T extends BabyUserCountArgs>(
      args?: Subset<T, BabyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BabyUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BabyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BabyUserAggregateArgs>(args: Subset<T, BabyUserAggregateArgs>): Prisma.PrismaPromise<GetBabyUserAggregateType<T>>

    /**
     * Group by BabyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BabyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BabyUserGroupByArgs['orderBy'] }
        : { orderBy?: BabyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BabyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BabyUser model
   */
  readonly fields: BabyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BabyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BabyUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BabyUser model
   */
  interface BabyUserFieldRefs {
    readonly id: FieldRef<"BabyUser", 'Int'>
    readonly userId: FieldRef<"BabyUser", 'Int'>
    readonly createdAt: FieldRef<"BabyUser", 'DateTime'>
    readonly updatedAt: FieldRef<"BabyUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BabyUser findUnique
   */
  export type BabyUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * Filter, which BabyUser to fetch.
     */
    where: BabyUserWhereUniqueInput
  }

  /**
   * BabyUser findUniqueOrThrow
   */
  export type BabyUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * Filter, which BabyUser to fetch.
     */
    where: BabyUserWhereUniqueInput
  }

  /**
   * BabyUser findFirst
   */
  export type BabyUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * Filter, which BabyUser to fetch.
     */
    where?: BabyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BabyUsers to fetch.
     */
    orderBy?: BabyUserOrderByWithRelationInput | BabyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BabyUsers.
     */
    cursor?: BabyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BabyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BabyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BabyUsers.
     */
    distinct?: BabyUserScalarFieldEnum | BabyUserScalarFieldEnum[]
  }

  /**
   * BabyUser findFirstOrThrow
   */
  export type BabyUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * Filter, which BabyUser to fetch.
     */
    where?: BabyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BabyUsers to fetch.
     */
    orderBy?: BabyUserOrderByWithRelationInput | BabyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BabyUsers.
     */
    cursor?: BabyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BabyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BabyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BabyUsers.
     */
    distinct?: BabyUserScalarFieldEnum | BabyUserScalarFieldEnum[]
  }

  /**
   * BabyUser findMany
   */
  export type BabyUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * Filter, which BabyUsers to fetch.
     */
    where?: BabyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BabyUsers to fetch.
     */
    orderBy?: BabyUserOrderByWithRelationInput | BabyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BabyUsers.
     */
    cursor?: BabyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BabyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BabyUsers.
     */
    skip?: number
    distinct?: BabyUserScalarFieldEnum | BabyUserScalarFieldEnum[]
  }

  /**
   * BabyUser create
   */
  export type BabyUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * The data needed to create a BabyUser.
     */
    data: XOR<BabyUserCreateInput, BabyUserUncheckedCreateInput>
  }

  /**
   * BabyUser createMany
   */
  export type BabyUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BabyUsers.
     */
    data: BabyUserCreateManyInput | BabyUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BabyUser createManyAndReturn
   */
  export type BabyUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * The data used to create many BabyUsers.
     */
    data: BabyUserCreateManyInput | BabyUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BabyUser update
   */
  export type BabyUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * The data needed to update a BabyUser.
     */
    data: XOR<BabyUserUpdateInput, BabyUserUncheckedUpdateInput>
    /**
     * Choose, which BabyUser to update.
     */
    where: BabyUserWhereUniqueInput
  }

  /**
   * BabyUser updateMany
   */
  export type BabyUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BabyUsers.
     */
    data: XOR<BabyUserUpdateManyMutationInput, BabyUserUncheckedUpdateManyInput>
    /**
     * Filter which BabyUsers to update
     */
    where?: BabyUserWhereInput
    /**
     * Limit how many BabyUsers to update.
     */
    limit?: number
  }

  /**
   * BabyUser updateManyAndReturn
   */
  export type BabyUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * The data used to update BabyUsers.
     */
    data: XOR<BabyUserUpdateManyMutationInput, BabyUserUncheckedUpdateManyInput>
    /**
     * Filter which BabyUsers to update
     */
    where?: BabyUserWhereInput
    /**
     * Limit how many BabyUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BabyUser upsert
   */
  export type BabyUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * The filter to search for the BabyUser to update in case it exists.
     */
    where: BabyUserWhereUniqueInput
    /**
     * In case the BabyUser found by the `where` argument doesn't exist, create a new BabyUser with this data.
     */
    create: XOR<BabyUserCreateInput, BabyUserUncheckedCreateInput>
    /**
     * In case the BabyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BabyUserUpdateInput, BabyUserUncheckedUpdateInput>
  }

  /**
   * BabyUser delete
   */
  export type BabyUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
    /**
     * Filter which BabyUser to delete.
     */
    where: BabyUserWhereUniqueInput
  }

  /**
   * BabyUser deleteMany
   */
  export type BabyUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BabyUsers to delete
     */
    where?: BabyUserWhereInput
    /**
     * Limit how many BabyUsers to delete.
     */
    limit?: number
  }

  /**
   * BabyUser without action
   */
  export type BabyUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyUser
     */
    select?: BabyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BabyUser
     */
    omit?: BabyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyUserInclude<ExtArgs> | null
  }


  /**
   * Model SoulUser
   */

  export type AggregateSoulUser = {
    _count: SoulUserCountAggregateOutputType | null
    _avg: SoulUserAvgAggregateOutputType | null
    _sum: SoulUserSumAggregateOutputType | null
    _min: SoulUserMinAggregateOutputType | null
    _max: SoulUserMaxAggregateOutputType | null
  }

  export type SoulUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SoulUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SoulUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoulUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoulUserCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SoulUserAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SoulUserSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SoulUserMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoulUserMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoulUserCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SoulUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoulUser to aggregate.
     */
    where?: SoulUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoulUsers to fetch.
     */
    orderBy?: SoulUserOrderByWithRelationInput | SoulUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoulUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoulUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoulUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoulUsers
    **/
    _count?: true | SoulUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoulUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoulUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoulUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoulUserMaxAggregateInputType
  }

  export type GetSoulUserAggregateType<T extends SoulUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSoulUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoulUser[P]>
      : GetScalarType<T[P], AggregateSoulUser[P]>
  }




  export type SoulUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoulUserWhereInput
    orderBy?: SoulUserOrderByWithAggregationInput | SoulUserOrderByWithAggregationInput[]
    by: SoulUserScalarFieldEnum[] | SoulUserScalarFieldEnum
    having?: SoulUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoulUserCountAggregateInputType | true
    _avg?: SoulUserAvgAggregateInputType
    _sum?: SoulUserSumAggregateInputType
    _min?: SoulUserMinAggregateInputType
    _max?: SoulUserMaxAggregateInputType
  }

  export type SoulUserGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: SoulUserCountAggregateOutputType | null
    _avg: SoulUserAvgAggregateOutputType | null
    _sum: SoulUserSumAggregateOutputType | null
    _min: SoulUserMinAggregateOutputType | null
    _max: SoulUserMaxAggregateOutputType | null
  }

  type GetSoulUserGroupByPayload<T extends SoulUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoulUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoulUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoulUserGroupByOutputType[P]>
            : GetScalarType<T[P], SoulUserGroupByOutputType[P]>
        }
      >
    >


  export type SoulUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soulUser"]>

  export type SoulUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soulUser"]>

  export type SoulUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soulUser"]>

  export type SoulUserSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SoulUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["soulUser"]>
  export type SoulUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SoulUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SoulUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SoulUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoulUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["soulUser"]>
    composites: {}
  }

  type SoulUserGetPayload<S extends boolean | null | undefined | SoulUserDefaultArgs> = $Result.GetResult<Prisma.$SoulUserPayload, S>

  type SoulUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoulUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoulUserCountAggregateInputType | true
    }

  export interface SoulUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoulUser'], meta: { name: 'SoulUser' } }
    /**
     * Find zero or one SoulUser that matches the filter.
     * @param {SoulUserFindUniqueArgs} args - Arguments to find a SoulUser
     * @example
     * // Get one SoulUser
     * const soulUser = await prisma.soulUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoulUserFindUniqueArgs>(args: SelectSubset<T, SoulUserFindUniqueArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SoulUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoulUserFindUniqueOrThrowArgs} args - Arguments to find a SoulUser
     * @example
     * // Get one SoulUser
     * const soulUser = await prisma.soulUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoulUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SoulUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoulUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserFindFirstArgs} args - Arguments to find a SoulUser
     * @example
     * // Get one SoulUser
     * const soulUser = await prisma.soulUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoulUserFindFirstArgs>(args?: SelectSubset<T, SoulUserFindFirstArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoulUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserFindFirstOrThrowArgs} args - Arguments to find a SoulUser
     * @example
     * // Get one SoulUser
     * const soulUser = await prisma.soulUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoulUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SoulUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SoulUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoulUsers
     * const soulUsers = await prisma.soulUser.findMany()
     * 
     * // Get first 10 SoulUsers
     * const soulUsers = await prisma.soulUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soulUserWithIdOnly = await prisma.soulUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoulUserFindManyArgs>(args?: SelectSubset<T, SoulUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SoulUser.
     * @param {SoulUserCreateArgs} args - Arguments to create a SoulUser.
     * @example
     * // Create one SoulUser
     * const SoulUser = await prisma.soulUser.create({
     *   data: {
     *     // ... data to create a SoulUser
     *   }
     * })
     * 
     */
    create<T extends SoulUserCreateArgs>(args: SelectSubset<T, SoulUserCreateArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SoulUsers.
     * @param {SoulUserCreateManyArgs} args - Arguments to create many SoulUsers.
     * @example
     * // Create many SoulUsers
     * const soulUser = await prisma.soulUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoulUserCreateManyArgs>(args?: SelectSubset<T, SoulUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SoulUsers and returns the data saved in the database.
     * @param {SoulUserCreateManyAndReturnArgs} args - Arguments to create many SoulUsers.
     * @example
     * // Create many SoulUsers
     * const soulUser = await prisma.soulUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SoulUsers and only return the `id`
     * const soulUserWithIdOnly = await prisma.soulUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoulUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SoulUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SoulUser.
     * @param {SoulUserDeleteArgs} args - Arguments to delete one SoulUser.
     * @example
     * // Delete one SoulUser
     * const SoulUser = await prisma.soulUser.delete({
     *   where: {
     *     // ... filter to delete one SoulUser
     *   }
     * })
     * 
     */
    delete<T extends SoulUserDeleteArgs>(args: SelectSubset<T, SoulUserDeleteArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SoulUser.
     * @param {SoulUserUpdateArgs} args - Arguments to update one SoulUser.
     * @example
     * // Update one SoulUser
     * const soulUser = await prisma.soulUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoulUserUpdateArgs>(args: SelectSubset<T, SoulUserUpdateArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SoulUsers.
     * @param {SoulUserDeleteManyArgs} args - Arguments to filter SoulUsers to delete.
     * @example
     * // Delete a few SoulUsers
     * const { count } = await prisma.soulUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoulUserDeleteManyArgs>(args?: SelectSubset<T, SoulUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoulUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoulUsers
     * const soulUser = await prisma.soulUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoulUserUpdateManyArgs>(args: SelectSubset<T, SoulUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoulUsers and returns the data updated in the database.
     * @param {SoulUserUpdateManyAndReturnArgs} args - Arguments to update many SoulUsers.
     * @example
     * // Update many SoulUsers
     * const soulUser = await prisma.soulUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SoulUsers and only return the `id`
     * const soulUserWithIdOnly = await prisma.soulUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SoulUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SoulUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SoulUser.
     * @param {SoulUserUpsertArgs} args - Arguments to update or create a SoulUser.
     * @example
     * // Update or create a SoulUser
     * const soulUser = await prisma.soulUser.upsert({
     *   create: {
     *     // ... data to create a SoulUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoulUser we want to update
     *   }
     * })
     */
    upsert<T extends SoulUserUpsertArgs>(args: SelectSubset<T, SoulUserUpsertArgs<ExtArgs>>): Prisma__SoulUserClient<$Result.GetResult<Prisma.$SoulUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SoulUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserCountArgs} args - Arguments to filter SoulUsers to count.
     * @example
     * // Count the number of SoulUsers
     * const count = await prisma.soulUser.count({
     *   where: {
     *     // ... the filter for the SoulUsers we want to count
     *   }
     * })
    **/
    count<T extends SoulUserCountArgs>(
      args?: Subset<T, SoulUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoulUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoulUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoulUserAggregateArgs>(args: Subset<T, SoulUserAggregateArgs>): Prisma.PrismaPromise<GetSoulUserAggregateType<T>>

    /**
     * Group by SoulUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoulUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoulUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoulUserGroupByArgs['orderBy'] }
        : { orderBy?: SoulUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoulUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoulUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoulUser model
   */
  readonly fields: SoulUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoulUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoulUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SoulUser model
   */
  interface SoulUserFieldRefs {
    readonly id: FieldRef<"SoulUser", 'Int'>
    readonly userId: FieldRef<"SoulUser", 'Int'>
    readonly createdAt: FieldRef<"SoulUser", 'DateTime'>
    readonly updatedAt: FieldRef<"SoulUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SoulUser findUnique
   */
  export type SoulUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * Filter, which SoulUser to fetch.
     */
    where: SoulUserWhereUniqueInput
  }

  /**
   * SoulUser findUniqueOrThrow
   */
  export type SoulUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * Filter, which SoulUser to fetch.
     */
    where: SoulUserWhereUniqueInput
  }

  /**
   * SoulUser findFirst
   */
  export type SoulUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * Filter, which SoulUser to fetch.
     */
    where?: SoulUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoulUsers to fetch.
     */
    orderBy?: SoulUserOrderByWithRelationInput | SoulUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoulUsers.
     */
    cursor?: SoulUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoulUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoulUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoulUsers.
     */
    distinct?: SoulUserScalarFieldEnum | SoulUserScalarFieldEnum[]
  }

  /**
   * SoulUser findFirstOrThrow
   */
  export type SoulUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * Filter, which SoulUser to fetch.
     */
    where?: SoulUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoulUsers to fetch.
     */
    orderBy?: SoulUserOrderByWithRelationInput | SoulUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoulUsers.
     */
    cursor?: SoulUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoulUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoulUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoulUsers.
     */
    distinct?: SoulUserScalarFieldEnum | SoulUserScalarFieldEnum[]
  }

  /**
   * SoulUser findMany
   */
  export type SoulUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * Filter, which SoulUsers to fetch.
     */
    where?: SoulUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoulUsers to fetch.
     */
    orderBy?: SoulUserOrderByWithRelationInput | SoulUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoulUsers.
     */
    cursor?: SoulUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoulUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoulUsers.
     */
    skip?: number
    distinct?: SoulUserScalarFieldEnum | SoulUserScalarFieldEnum[]
  }

  /**
   * SoulUser create
   */
  export type SoulUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SoulUser.
     */
    data: XOR<SoulUserCreateInput, SoulUserUncheckedCreateInput>
  }

  /**
   * SoulUser createMany
   */
  export type SoulUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoulUsers.
     */
    data: SoulUserCreateManyInput | SoulUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoulUser createManyAndReturn
   */
  export type SoulUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * The data used to create many SoulUsers.
     */
    data: SoulUserCreateManyInput | SoulUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SoulUser update
   */
  export type SoulUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SoulUser.
     */
    data: XOR<SoulUserUpdateInput, SoulUserUncheckedUpdateInput>
    /**
     * Choose, which SoulUser to update.
     */
    where: SoulUserWhereUniqueInput
  }

  /**
   * SoulUser updateMany
   */
  export type SoulUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoulUsers.
     */
    data: XOR<SoulUserUpdateManyMutationInput, SoulUserUncheckedUpdateManyInput>
    /**
     * Filter which SoulUsers to update
     */
    where?: SoulUserWhereInput
    /**
     * Limit how many SoulUsers to update.
     */
    limit?: number
  }

  /**
   * SoulUser updateManyAndReturn
   */
  export type SoulUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * The data used to update SoulUsers.
     */
    data: XOR<SoulUserUpdateManyMutationInput, SoulUserUncheckedUpdateManyInput>
    /**
     * Filter which SoulUsers to update
     */
    where?: SoulUserWhereInput
    /**
     * Limit how many SoulUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SoulUser upsert
   */
  export type SoulUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SoulUser to update in case it exists.
     */
    where: SoulUserWhereUniqueInput
    /**
     * In case the SoulUser found by the `where` argument doesn't exist, create a new SoulUser with this data.
     */
    create: XOR<SoulUserCreateInput, SoulUserUncheckedCreateInput>
    /**
     * In case the SoulUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoulUserUpdateInput, SoulUserUncheckedUpdateInput>
  }

  /**
   * SoulUser delete
   */
  export type SoulUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
    /**
     * Filter which SoulUser to delete.
     */
    where: SoulUserWhereUniqueInput
  }

  /**
   * SoulUser deleteMany
   */
  export type SoulUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoulUsers to delete
     */
    where?: SoulUserWhereInput
    /**
     * Limit how many SoulUsers to delete.
     */
    limit?: number
  }

  /**
   * SoulUser without action
   */
  export type SoulUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoulUser
     */
    select?: SoulUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoulUser
     */
    omit?: SoulUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoulUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    pin: 'pin',
    name: 'name',
    surname: 'surname',
    phone: 'phone',
    sector: 'sector',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PetsUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetsUserScalarFieldEnum = (typeof PetsUserScalarFieldEnum)[keyof typeof PetsUserScalarFieldEnum]


  export const BabyUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BabyUserScalarFieldEnum = (typeof BabyUserScalarFieldEnum)[keyof typeof BabyUserScalarFieldEnum]


  export const SoulUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SoulUserScalarFieldEnum = (typeof SoulUserScalarFieldEnum)[keyof typeof SoulUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    sector?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    petsUser?: XOR<PetsUserNullableScalarRelationFilter, PetsUserWhereInput> | null
    babyUser?: XOR<BabyUserNullableScalarRelationFilter, BabyUserWhereInput> | null
    soulUser?: XOR<SoulUserNullableScalarRelationFilter, SoulUserWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    pin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petsUser?: PetsUserOrderByWithRelationInput
    babyUser?: BabyUserOrderByWithRelationInput
    soulUser?: SoulUserOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    pin?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    sector?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    petsUser?: XOR<PetsUserNullableScalarRelationFilter, PetsUserWhereInput> | null
    babyUser?: XOR<BabyUserNullableScalarRelationFilter, BabyUserWhereInput> | null
    soulUser?: XOR<SoulUserNullableScalarRelationFilter, SoulUserWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    pin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    pin?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    sector?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PetsUserWhereInput = {
    AND?: PetsUserWhereInput | PetsUserWhereInput[]
    OR?: PetsUserWhereInput[]
    NOT?: PetsUserWhereInput | PetsUserWhereInput[]
    id?: IntFilter<"PetsUser"> | number
    userId?: IntFilter<"PetsUser"> | number
    createdAt?: DateTimeFilter<"PetsUser"> | Date | string
    updatedAt?: DateTimeFilter<"PetsUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PetsUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PetsUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: PetsUserWhereInput | PetsUserWhereInput[]
    OR?: PetsUserWhereInput[]
    NOT?: PetsUserWhereInput | PetsUserWhereInput[]
    createdAt?: DateTimeFilter<"PetsUser"> | Date | string
    updatedAt?: DateTimeFilter<"PetsUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PetsUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetsUserCountOrderByAggregateInput
    _avg?: PetsUserAvgOrderByAggregateInput
    _max?: PetsUserMaxOrderByAggregateInput
    _min?: PetsUserMinOrderByAggregateInput
    _sum?: PetsUserSumOrderByAggregateInput
  }

  export type PetsUserScalarWhereWithAggregatesInput = {
    AND?: PetsUserScalarWhereWithAggregatesInput | PetsUserScalarWhereWithAggregatesInput[]
    OR?: PetsUserScalarWhereWithAggregatesInput[]
    NOT?: PetsUserScalarWhereWithAggregatesInput | PetsUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PetsUser"> | number
    userId?: IntWithAggregatesFilter<"PetsUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PetsUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PetsUser"> | Date | string
  }

  export type BabyUserWhereInput = {
    AND?: BabyUserWhereInput | BabyUserWhereInput[]
    OR?: BabyUserWhereInput[]
    NOT?: BabyUserWhereInput | BabyUserWhereInput[]
    id?: IntFilter<"BabyUser"> | number
    userId?: IntFilter<"BabyUser"> | number
    createdAt?: DateTimeFilter<"BabyUser"> | Date | string
    updatedAt?: DateTimeFilter<"BabyUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BabyUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BabyUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BabyUserWhereInput | BabyUserWhereInput[]
    OR?: BabyUserWhereInput[]
    NOT?: BabyUserWhereInput | BabyUserWhereInput[]
    createdAt?: DateTimeFilter<"BabyUser"> | Date | string
    updatedAt?: DateTimeFilter<"BabyUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BabyUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BabyUserCountOrderByAggregateInput
    _avg?: BabyUserAvgOrderByAggregateInput
    _max?: BabyUserMaxOrderByAggregateInput
    _min?: BabyUserMinOrderByAggregateInput
    _sum?: BabyUserSumOrderByAggregateInput
  }

  export type BabyUserScalarWhereWithAggregatesInput = {
    AND?: BabyUserScalarWhereWithAggregatesInput | BabyUserScalarWhereWithAggregatesInput[]
    OR?: BabyUserScalarWhereWithAggregatesInput[]
    NOT?: BabyUserScalarWhereWithAggregatesInput | BabyUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BabyUser"> | number
    userId?: IntWithAggregatesFilter<"BabyUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BabyUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BabyUser"> | Date | string
  }

  export type SoulUserWhereInput = {
    AND?: SoulUserWhereInput | SoulUserWhereInput[]
    OR?: SoulUserWhereInput[]
    NOT?: SoulUserWhereInput | SoulUserWhereInput[]
    id?: IntFilter<"SoulUser"> | number
    userId?: IntFilter<"SoulUser"> | number
    createdAt?: DateTimeFilter<"SoulUser"> | Date | string
    updatedAt?: DateTimeFilter<"SoulUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SoulUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SoulUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: SoulUserWhereInput | SoulUserWhereInput[]
    OR?: SoulUserWhereInput[]
    NOT?: SoulUserWhereInput | SoulUserWhereInput[]
    createdAt?: DateTimeFilter<"SoulUser"> | Date | string
    updatedAt?: DateTimeFilter<"SoulUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SoulUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SoulUserCountOrderByAggregateInput
    _avg?: SoulUserAvgOrderByAggregateInput
    _max?: SoulUserMaxOrderByAggregateInput
    _min?: SoulUserMinOrderByAggregateInput
    _sum?: SoulUserSumOrderByAggregateInput
  }

  export type SoulUserScalarWhereWithAggregatesInput = {
    AND?: SoulUserScalarWhereWithAggregatesInput | SoulUserScalarWhereWithAggregatesInput[]
    OR?: SoulUserScalarWhereWithAggregatesInput[]
    NOT?: SoulUserScalarWhereWithAggregatesInput | SoulUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SoulUser"> | number
    userId?: IntWithAggregatesFilter<"SoulUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SoulUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SoulUser"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    petsUser?: PetsUserCreateNestedOneWithoutUserInput
    babyUser?: BabyUserCreateNestedOneWithoutUserInput
    soulUser?: SoulUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    petsUser?: PetsUserUncheckedCreateNestedOneWithoutUserInput
    babyUser?: BabyUserUncheckedCreateNestedOneWithoutUserInput
    soulUser?: SoulUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petsUser?: PetsUserUpdateOneWithoutUserNestedInput
    babyUser?: BabyUserUpdateOneWithoutUserNestedInput
    soulUser?: SoulUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petsUser?: PetsUserUncheckedUpdateOneWithoutUserNestedInput
    babyUser?: BabyUserUncheckedUpdateOneWithoutUserNestedInput
    soulUser?: SoulUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetsUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPetsUserInput
  }

  export type PetsUserUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetsUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsUserNestedInput
  }

  export type PetsUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetsUserCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetsUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetsUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBabyUserInput
  }

  export type BabyUserUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBabyUserNestedInput
  }

  export type BabyUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUserCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoulUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSoulUserInput
  }

  export type SoulUserUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoulUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSoulUserNestedInput
  }

  export type SoulUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoulUserCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoulUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoulUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PetsUserNullableScalarRelationFilter = {
    is?: PetsUserWhereInput | null
    isNot?: PetsUserWhereInput | null
  }

  export type BabyUserNullableScalarRelationFilter = {
    is?: BabyUserWhereInput | null
    isNot?: BabyUserWhereInput | null
  }

  export type SoulUserNullableScalarRelationFilter = {
    is?: SoulUserWhereInput | null
    isNot?: SoulUserWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    pin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    pin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    pin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PetsUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetsUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PetsUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetsUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetsUserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BabyUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BabyUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BabyUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BabyUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BabyUserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SoulUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoulUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SoulUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoulUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoulUserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PetsUserCreateNestedOneWithoutUserInput = {
    create?: XOR<PetsUserCreateWithoutUserInput, PetsUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetsUserCreateOrConnectWithoutUserInput
    connect?: PetsUserWhereUniqueInput
  }

  export type BabyUserCreateNestedOneWithoutUserInput = {
    create?: XOR<BabyUserCreateWithoutUserInput, BabyUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BabyUserCreateOrConnectWithoutUserInput
    connect?: BabyUserWhereUniqueInput
  }

  export type SoulUserCreateNestedOneWithoutUserInput = {
    create?: XOR<SoulUserCreateWithoutUserInput, SoulUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SoulUserCreateOrConnectWithoutUserInput
    connect?: SoulUserWhereUniqueInput
  }

  export type PetsUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PetsUserCreateWithoutUserInput, PetsUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetsUserCreateOrConnectWithoutUserInput
    connect?: PetsUserWhereUniqueInput
  }

  export type BabyUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BabyUserCreateWithoutUserInput, BabyUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BabyUserCreateOrConnectWithoutUserInput
    connect?: BabyUserWhereUniqueInput
  }

  export type SoulUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SoulUserCreateWithoutUserInput, SoulUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SoulUserCreateOrConnectWithoutUserInput
    connect?: SoulUserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PetsUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<PetsUserCreateWithoutUserInput, PetsUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetsUserCreateOrConnectWithoutUserInput
    upsert?: PetsUserUpsertWithoutUserInput
    disconnect?: PetsUserWhereInput | boolean
    delete?: PetsUserWhereInput | boolean
    connect?: PetsUserWhereUniqueInput
    update?: XOR<XOR<PetsUserUpdateToOneWithWhereWithoutUserInput, PetsUserUpdateWithoutUserInput>, PetsUserUncheckedUpdateWithoutUserInput>
  }

  export type BabyUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<BabyUserCreateWithoutUserInput, BabyUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BabyUserCreateOrConnectWithoutUserInput
    upsert?: BabyUserUpsertWithoutUserInput
    disconnect?: BabyUserWhereInput | boolean
    delete?: BabyUserWhereInput | boolean
    connect?: BabyUserWhereUniqueInput
    update?: XOR<XOR<BabyUserUpdateToOneWithWhereWithoutUserInput, BabyUserUpdateWithoutUserInput>, BabyUserUncheckedUpdateWithoutUserInput>
  }

  export type SoulUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<SoulUserCreateWithoutUserInput, SoulUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SoulUserCreateOrConnectWithoutUserInput
    upsert?: SoulUserUpsertWithoutUserInput
    disconnect?: SoulUserWhereInput | boolean
    delete?: SoulUserWhereInput | boolean
    connect?: SoulUserWhereUniqueInput
    update?: XOR<XOR<SoulUserUpdateToOneWithWhereWithoutUserInput, SoulUserUpdateWithoutUserInput>, SoulUserUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetsUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PetsUserCreateWithoutUserInput, PetsUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetsUserCreateOrConnectWithoutUserInput
    upsert?: PetsUserUpsertWithoutUserInput
    disconnect?: PetsUserWhereInput | boolean
    delete?: PetsUserWhereInput | boolean
    connect?: PetsUserWhereUniqueInput
    update?: XOR<XOR<PetsUserUpdateToOneWithWhereWithoutUserInput, PetsUserUpdateWithoutUserInput>, PetsUserUncheckedUpdateWithoutUserInput>
  }

  export type BabyUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BabyUserCreateWithoutUserInput, BabyUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BabyUserCreateOrConnectWithoutUserInput
    upsert?: BabyUserUpsertWithoutUserInput
    disconnect?: BabyUserWhereInput | boolean
    delete?: BabyUserWhereInput | boolean
    connect?: BabyUserWhereUniqueInput
    update?: XOR<XOR<BabyUserUpdateToOneWithWhereWithoutUserInput, BabyUserUpdateWithoutUserInput>, BabyUserUncheckedUpdateWithoutUserInput>
  }

  export type SoulUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SoulUserCreateWithoutUserInput, SoulUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SoulUserCreateOrConnectWithoutUserInput
    upsert?: SoulUserUpsertWithoutUserInput
    disconnect?: SoulUserWhereInput | boolean
    delete?: SoulUserWhereInput | boolean
    connect?: SoulUserWhereUniqueInput
    update?: XOR<XOR<SoulUserUpdateToOneWithWhereWithoutUserInput, SoulUserUpdateWithoutUserInput>, SoulUserUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPetsUserInput = {
    create?: XOR<UserCreateWithoutPetsUserInput, UserUncheckedCreateWithoutPetsUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPetsUserNestedInput = {
    create?: XOR<UserCreateWithoutPetsUserInput, UserUncheckedCreateWithoutPetsUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsUserInput
    upsert?: UserUpsertWithoutPetsUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetsUserInput, UserUpdateWithoutPetsUserInput>, UserUncheckedUpdateWithoutPetsUserInput>
  }

  export type UserCreateNestedOneWithoutBabyUserInput = {
    create?: XOR<UserCreateWithoutBabyUserInput, UserUncheckedCreateWithoutBabyUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBabyUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBabyUserNestedInput = {
    create?: XOR<UserCreateWithoutBabyUserInput, UserUncheckedCreateWithoutBabyUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutBabyUserInput
    upsert?: UserUpsertWithoutBabyUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBabyUserInput, UserUpdateWithoutBabyUserInput>, UserUncheckedUpdateWithoutBabyUserInput>
  }

  export type UserCreateNestedOneWithoutSoulUserInput = {
    create?: XOR<UserCreateWithoutSoulUserInput, UserUncheckedCreateWithoutSoulUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoulUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSoulUserNestedInput = {
    create?: XOR<UserCreateWithoutSoulUserInput, UserUncheckedCreateWithoutSoulUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoulUserInput
    upsert?: UserUpsertWithoutSoulUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSoulUserInput, UserUpdateWithoutSoulUserInput>, UserUncheckedUpdateWithoutSoulUserInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PetsUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetsUserUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetsUserCreateOrConnectWithoutUserInput = {
    where: PetsUserWhereUniqueInput
    create: XOR<PetsUserCreateWithoutUserInput, PetsUserUncheckedCreateWithoutUserInput>
  }

  export type BabyUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyUserUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyUserCreateOrConnectWithoutUserInput = {
    where: BabyUserWhereUniqueInput
    create: XOR<BabyUserCreateWithoutUserInput, BabyUserUncheckedCreateWithoutUserInput>
  }

  export type SoulUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoulUserUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoulUserCreateOrConnectWithoutUserInput = {
    where: SoulUserWhereUniqueInput
    create: XOR<SoulUserCreateWithoutUserInput, SoulUserUncheckedCreateWithoutUserInput>
  }

  export type PetsUserUpsertWithoutUserInput = {
    update: XOR<PetsUserUpdateWithoutUserInput, PetsUserUncheckedUpdateWithoutUserInput>
    create: XOR<PetsUserCreateWithoutUserInput, PetsUserUncheckedCreateWithoutUserInput>
    where?: PetsUserWhereInput
  }

  export type PetsUserUpdateToOneWithWhereWithoutUserInput = {
    where?: PetsUserWhereInput
    data: XOR<PetsUserUpdateWithoutUserInput, PetsUserUncheckedUpdateWithoutUserInput>
  }

  export type PetsUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetsUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUserUpsertWithoutUserInput = {
    update: XOR<BabyUserUpdateWithoutUserInput, BabyUserUncheckedUpdateWithoutUserInput>
    create: XOR<BabyUserCreateWithoutUserInput, BabyUserUncheckedCreateWithoutUserInput>
    where?: BabyUserWhereInput
  }

  export type BabyUserUpdateToOneWithWhereWithoutUserInput = {
    where?: BabyUserWhereInput
    data: XOR<BabyUserUpdateWithoutUserInput, BabyUserUncheckedUpdateWithoutUserInput>
  }

  export type BabyUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoulUserUpsertWithoutUserInput = {
    update: XOR<SoulUserUpdateWithoutUserInput, SoulUserUncheckedUpdateWithoutUserInput>
    create: XOR<SoulUserCreateWithoutUserInput, SoulUserUncheckedCreateWithoutUserInput>
    where?: SoulUserWhereInput
  }

  export type SoulUserUpdateToOneWithWhereWithoutUserInput = {
    where?: SoulUserWhereInput
    data: XOR<SoulUserUpdateWithoutUserInput, SoulUserUncheckedUpdateWithoutUserInput>
  }

  export type SoulUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoulUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPetsUserInput = {
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    babyUser?: BabyUserCreateNestedOneWithoutUserInput
    soulUser?: SoulUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetsUserInput = {
    id?: number
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    babyUser?: BabyUserUncheckedCreateNestedOneWithoutUserInput
    soulUser?: SoulUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetsUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetsUserInput, UserUncheckedCreateWithoutPetsUserInput>
  }

  export type UserUpsertWithoutPetsUserInput = {
    update: XOR<UserUpdateWithoutPetsUserInput, UserUncheckedUpdateWithoutPetsUserInput>
    create: XOR<UserCreateWithoutPetsUserInput, UserUncheckedCreateWithoutPetsUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetsUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetsUserInput, UserUncheckedUpdateWithoutPetsUserInput>
  }

  export type UserUpdateWithoutPetsUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babyUser?: BabyUserUpdateOneWithoutUserNestedInput
    soulUser?: SoulUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetsUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babyUser?: BabyUserUncheckedUpdateOneWithoutUserNestedInput
    soulUser?: SoulUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutBabyUserInput = {
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    petsUser?: PetsUserCreateNestedOneWithoutUserInput
    soulUser?: SoulUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBabyUserInput = {
    id?: number
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    petsUser?: PetsUserUncheckedCreateNestedOneWithoutUserInput
    soulUser?: SoulUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBabyUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBabyUserInput, UserUncheckedCreateWithoutBabyUserInput>
  }

  export type UserUpsertWithoutBabyUserInput = {
    update: XOR<UserUpdateWithoutBabyUserInput, UserUncheckedUpdateWithoutBabyUserInput>
    create: XOR<UserCreateWithoutBabyUserInput, UserUncheckedCreateWithoutBabyUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBabyUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBabyUserInput, UserUncheckedUpdateWithoutBabyUserInput>
  }

  export type UserUpdateWithoutBabyUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petsUser?: PetsUserUpdateOneWithoutUserNestedInput
    soulUser?: SoulUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBabyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petsUser?: PetsUserUncheckedUpdateOneWithoutUserNestedInput
    soulUser?: SoulUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSoulUserInput = {
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    petsUser?: PetsUserCreateNestedOneWithoutUserInput
    babyUser?: BabyUserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSoulUserInput = {
    id?: number
    email: string
    pin: string
    name: string
    surname: string
    phone: string
    sector: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    petsUser?: PetsUserUncheckedCreateNestedOneWithoutUserInput
    babyUser?: BabyUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSoulUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoulUserInput, UserUncheckedCreateWithoutSoulUserInput>
  }

  export type UserUpsertWithoutSoulUserInput = {
    update: XOR<UserUpdateWithoutSoulUserInput, UserUncheckedUpdateWithoutSoulUserInput>
    create: XOR<UserCreateWithoutSoulUserInput, UserUncheckedCreateWithoutSoulUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSoulUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSoulUserInput, UserUncheckedUpdateWithoutSoulUserInput>
  }

  export type UserUpdateWithoutSoulUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petsUser?: PetsUserUpdateOneWithoutUserNestedInput
    babyUser?: BabyUserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSoulUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petsUser?: PetsUserUncheckedUpdateOneWithoutUserNestedInput
    babyUser?: BabyUserUncheckedUpdateOneWithoutUserNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}