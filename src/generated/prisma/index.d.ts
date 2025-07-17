
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
 * Model SignosVitales
 * 
 */
export type SignosVitales = $Result.DefaultSelection<Prisma.$SignosVitalesPayload>
/**
 * Model Resultado
 * 
 */
export type Resultado = $Result.DefaultSelection<Prisma.$ResultadoPayload>

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
   * `prisma.signosVitales`: Exposes CRUD operations for the **SignosVitales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SignosVitales
    * const signosVitales = await prisma.signosVitales.findMany()
    * ```
    */
  get signosVitales(): Prisma.SignosVitalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultado`: Exposes CRUD operations for the **Resultado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultados
    * const resultados = await prisma.resultado.findMany()
    * ```
    */
  get resultado(): Prisma.ResultadoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    SignosVitales: 'SignosVitales',
    Resultado: 'Resultado'
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
      modelProps: "user" | "signosVitales" | "resultado"
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
      SignosVitales: {
        payload: Prisma.$SignosVitalesPayload<ExtArgs>
        fields: Prisma.SignosVitalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignosVitalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignosVitalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>
          }
          findFirst: {
            args: Prisma.SignosVitalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignosVitalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>
          }
          findMany: {
            args: Prisma.SignosVitalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>[]
          }
          create: {
            args: Prisma.SignosVitalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>
          }
          createMany: {
            args: Prisma.SignosVitalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignosVitalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>[]
          }
          delete: {
            args: Prisma.SignosVitalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>
          }
          update: {
            args: Prisma.SignosVitalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>
          }
          deleteMany: {
            args: Prisma.SignosVitalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignosVitalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignosVitalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>[]
          }
          upsert: {
            args: Prisma.SignosVitalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignosVitalesPayload>
          }
          aggregate: {
            args: Prisma.SignosVitalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignosVitales>
          }
          groupBy: {
            args: Prisma.SignosVitalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignosVitalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignosVitalesCountArgs<ExtArgs>
            result: $Utils.Optional<SignosVitalesCountAggregateOutputType> | number
          }
        }
      }
      Resultado: {
        payload: Prisma.$ResultadoPayload<ExtArgs>
        fields: Prisma.ResultadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          findFirst: {
            args: Prisma.ResultadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          findMany: {
            args: Prisma.ResultadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          create: {
            args: Prisma.ResultadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          createMany: {
            args: Prisma.ResultadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          delete: {
            args: Prisma.ResultadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          update: {
            args: Prisma.ResultadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          deleteMany: {
            args: Prisma.ResultadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          upsert: {
            args: Prisma.ResultadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          aggregate: {
            args: Prisma.ResultadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultado>
          }
          groupBy: {
            args: Prisma.ResultadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultadoCountArgs<ExtArgs>
            result: $Utils.Optional<ResultadoCountAggregateOutputType> | number
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
    signosVitales?: SignosVitalesOmit
    resultado?: ResultadoOmit
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
   * Count Type SignosVitalesCountOutputType
   */

  export type SignosVitalesCountOutputType = {
    resultados: number
  }

  export type SignosVitalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultados?: boolean | SignosVitalesCountOutputTypeCountResultadosArgs
  }

  // Custom InputTypes
  /**
   * SignosVitalesCountOutputType without action
   */
  export type SignosVitalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitalesCountOutputType
     */
    select?: SignosVitalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignosVitalesCountOutputType without action
   */
  export type SignosVitalesCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
  }


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
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
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
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
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
    name: string
    email: string
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
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
  }


  /**
   * Model SignosVitales
   */

  export type AggregateSignosVitales = {
    _count: SignosVitalesCountAggregateOutputType | null
    _avg: SignosVitalesAvgAggregateOutputType | null
    _sum: SignosVitalesSumAggregateOutputType | null
    _min: SignosVitalesMinAggregateOutputType | null
    _max: SignosVitalesMaxAggregateOutputType | null
  }

  export type SignosVitalesAvgAggregateOutputType = {
    id: number | null
    frecuencia_cardiaca: number | null
    presion_arterial: number | null
    frecuencia_respiratoria: number | null
    temperatura_corporal: number | null
    saturacion_oxigeno: number | null
    procalcitonina: number | null
    lactato: number | null
    proteina_creactiva: number | null
    leucocitos: number | null
  }

  export type SignosVitalesSumAggregateOutputType = {
    id: number | null
    frecuencia_cardiaca: number | null
    presion_arterial: number | null
    frecuencia_respiratoria: number | null
    temperatura_corporal: number | null
    saturacion_oxigeno: number | null
    procalcitonina: number | null
    lactato: number | null
    proteina_creactiva: number | null
    leucocitos: number | null
  }

  export type SignosVitalesMinAggregateOutputType = {
    id: number | null
    frecuencia_cardiaca: number | null
    presion_arterial: number | null
    frecuencia_respiratoria: number | null
    temperatura_corporal: number | null
    saturacion_oxigeno: number | null
    procalcitonina: number | null
    lactato: number | null
    proteina_creactiva: number | null
    leucocitos: number | null
    patologias_presentes: string | null
    horario: Date | null
  }

  export type SignosVitalesMaxAggregateOutputType = {
    id: number | null
    frecuencia_cardiaca: number | null
    presion_arterial: number | null
    frecuencia_respiratoria: number | null
    temperatura_corporal: number | null
    saturacion_oxigeno: number | null
    procalcitonina: number | null
    lactato: number | null
    proteina_creactiva: number | null
    leucocitos: number | null
    patologias_presentes: string | null
    horario: Date | null
  }

  export type SignosVitalesCountAggregateOutputType = {
    id: number
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: number
    horario: number
    _all: number
  }


  export type SignosVitalesAvgAggregateInputType = {
    id?: true
    frecuencia_cardiaca?: true
    presion_arterial?: true
    frecuencia_respiratoria?: true
    temperatura_corporal?: true
    saturacion_oxigeno?: true
    procalcitonina?: true
    lactato?: true
    proteina_creactiva?: true
    leucocitos?: true
  }

  export type SignosVitalesSumAggregateInputType = {
    id?: true
    frecuencia_cardiaca?: true
    presion_arterial?: true
    frecuencia_respiratoria?: true
    temperatura_corporal?: true
    saturacion_oxigeno?: true
    procalcitonina?: true
    lactato?: true
    proteina_creactiva?: true
    leucocitos?: true
  }

  export type SignosVitalesMinAggregateInputType = {
    id?: true
    frecuencia_cardiaca?: true
    presion_arterial?: true
    frecuencia_respiratoria?: true
    temperatura_corporal?: true
    saturacion_oxigeno?: true
    procalcitonina?: true
    lactato?: true
    proteina_creactiva?: true
    leucocitos?: true
    patologias_presentes?: true
    horario?: true
  }

  export type SignosVitalesMaxAggregateInputType = {
    id?: true
    frecuencia_cardiaca?: true
    presion_arterial?: true
    frecuencia_respiratoria?: true
    temperatura_corporal?: true
    saturacion_oxigeno?: true
    procalcitonina?: true
    lactato?: true
    proteina_creactiva?: true
    leucocitos?: true
    patologias_presentes?: true
    horario?: true
  }

  export type SignosVitalesCountAggregateInputType = {
    id?: true
    frecuencia_cardiaca?: true
    presion_arterial?: true
    frecuencia_respiratoria?: true
    temperatura_corporal?: true
    saturacion_oxigeno?: true
    procalcitonina?: true
    lactato?: true
    proteina_creactiva?: true
    leucocitos?: true
    patologias_presentes?: true
    horario?: true
    _all?: true
  }

  export type SignosVitalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignosVitales to aggregate.
     */
    where?: SignosVitalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignosVitales to fetch.
     */
    orderBy?: SignosVitalesOrderByWithRelationInput | SignosVitalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignosVitalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignosVitales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignosVitales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SignosVitales
    **/
    _count?: true | SignosVitalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignosVitalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignosVitalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignosVitalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignosVitalesMaxAggregateInputType
  }

  export type GetSignosVitalesAggregateType<T extends SignosVitalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSignosVitales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignosVitales[P]>
      : GetScalarType<T[P], AggregateSignosVitales[P]>
  }




  export type SignosVitalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignosVitalesWhereInput
    orderBy?: SignosVitalesOrderByWithAggregationInput | SignosVitalesOrderByWithAggregationInput[]
    by: SignosVitalesScalarFieldEnum[] | SignosVitalesScalarFieldEnum
    having?: SignosVitalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignosVitalesCountAggregateInputType | true
    _avg?: SignosVitalesAvgAggregateInputType
    _sum?: SignosVitalesSumAggregateInputType
    _min?: SignosVitalesMinAggregateInputType
    _max?: SignosVitalesMaxAggregateInputType
  }

  export type SignosVitalesGroupByOutputType = {
    id: number
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: string
    horario: Date
    _count: SignosVitalesCountAggregateOutputType | null
    _avg: SignosVitalesAvgAggregateOutputType | null
    _sum: SignosVitalesSumAggregateOutputType | null
    _min: SignosVitalesMinAggregateOutputType | null
    _max: SignosVitalesMaxAggregateOutputType | null
  }

  type GetSignosVitalesGroupByPayload<T extends SignosVitalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignosVitalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignosVitalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignosVitalesGroupByOutputType[P]>
            : GetScalarType<T[P], SignosVitalesGroupByOutputType[P]>
        }
      >
    >


  export type SignosVitalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    frecuencia_cardiaca?: boolean
    presion_arterial?: boolean
    frecuencia_respiratoria?: boolean
    temperatura_corporal?: boolean
    saturacion_oxigeno?: boolean
    procalcitonina?: boolean
    lactato?: boolean
    proteina_creactiva?: boolean
    leucocitos?: boolean
    patologias_presentes?: boolean
    horario?: boolean
    resultados?: boolean | SignosVitales$resultadosArgs<ExtArgs>
    _count?: boolean | SignosVitalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signosVitales"]>

  export type SignosVitalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    frecuencia_cardiaca?: boolean
    presion_arterial?: boolean
    frecuencia_respiratoria?: boolean
    temperatura_corporal?: boolean
    saturacion_oxigeno?: boolean
    procalcitonina?: boolean
    lactato?: boolean
    proteina_creactiva?: boolean
    leucocitos?: boolean
    patologias_presentes?: boolean
    horario?: boolean
  }, ExtArgs["result"]["signosVitales"]>

  export type SignosVitalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    frecuencia_cardiaca?: boolean
    presion_arterial?: boolean
    frecuencia_respiratoria?: boolean
    temperatura_corporal?: boolean
    saturacion_oxigeno?: boolean
    procalcitonina?: boolean
    lactato?: boolean
    proteina_creactiva?: boolean
    leucocitos?: boolean
    patologias_presentes?: boolean
    horario?: boolean
  }, ExtArgs["result"]["signosVitales"]>

  export type SignosVitalesSelectScalar = {
    id?: boolean
    frecuencia_cardiaca?: boolean
    presion_arterial?: boolean
    frecuencia_respiratoria?: boolean
    temperatura_corporal?: boolean
    saturacion_oxigeno?: boolean
    procalcitonina?: boolean
    lactato?: boolean
    proteina_creactiva?: boolean
    leucocitos?: boolean
    patologias_presentes?: boolean
    horario?: boolean
  }

  export type SignosVitalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "frecuencia_cardiaca" | "presion_arterial" | "frecuencia_respiratoria" | "temperatura_corporal" | "saturacion_oxigeno" | "procalcitonina" | "lactato" | "proteina_creactiva" | "leucocitos" | "patologias_presentes" | "horario", ExtArgs["result"]["signosVitales"]>
  export type SignosVitalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultados?: boolean | SignosVitales$resultadosArgs<ExtArgs>
    _count?: boolean | SignosVitalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignosVitalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SignosVitalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SignosVitalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SignosVitales"
    objects: {
      resultados: Prisma.$ResultadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      frecuencia_cardiaca: number
      presion_arterial: number
      frecuencia_respiratoria: number
      temperatura_corporal: number
      saturacion_oxigeno: number
      procalcitonina: number
      lactato: number
      proteina_creactiva: number
      leucocitos: number
      patologias_presentes: string
      horario: Date
    }, ExtArgs["result"]["signosVitales"]>
    composites: {}
  }

  type SignosVitalesGetPayload<S extends boolean | null | undefined | SignosVitalesDefaultArgs> = $Result.GetResult<Prisma.$SignosVitalesPayload, S>

  type SignosVitalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignosVitalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignosVitalesCountAggregateInputType | true
    }

  export interface SignosVitalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SignosVitales'], meta: { name: 'SignosVitales' } }
    /**
     * Find zero or one SignosVitales that matches the filter.
     * @param {SignosVitalesFindUniqueArgs} args - Arguments to find a SignosVitales
     * @example
     * // Get one SignosVitales
     * const signosVitales = await prisma.signosVitales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignosVitalesFindUniqueArgs>(args: SelectSubset<T, SignosVitalesFindUniqueArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SignosVitales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignosVitalesFindUniqueOrThrowArgs} args - Arguments to find a SignosVitales
     * @example
     * // Get one SignosVitales
     * const signosVitales = await prisma.signosVitales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignosVitalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SignosVitalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignosVitales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesFindFirstArgs} args - Arguments to find a SignosVitales
     * @example
     * // Get one SignosVitales
     * const signosVitales = await prisma.signosVitales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignosVitalesFindFirstArgs>(args?: SelectSubset<T, SignosVitalesFindFirstArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignosVitales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesFindFirstOrThrowArgs} args - Arguments to find a SignosVitales
     * @example
     * // Get one SignosVitales
     * const signosVitales = await prisma.signosVitales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignosVitalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SignosVitalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SignosVitales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SignosVitales
     * const signosVitales = await prisma.signosVitales.findMany()
     * 
     * // Get first 10 SignosVitales
     * const signosVitales = await prisma.signosVitales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signosVitalesWithIdOnly = await prisma.signosVitales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignosVitalesFindManyArgs>(args?: SelectSubset<T, SignosVitalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SignosVitales.
     * @param {SignosVitalesCreateArgs} args - Arguments to create a SignosVitales.
     * @example
     * // Create one SignosVitales
     * const SignosVitales = await prisma.signosVitales.create({
     *   data: {
     *     // ... data to create a SignosVitales
     *   }
     * })
     * 
     */
    create<T extends SignosVitalesCreateArgs>(args: SelectSubset<T, SignosVitalesCreateArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SignosVitales.
     * @param {SignosVitalesCreateManyArgs} args - Arguments to create many SignosVitales.
     * @example
     * // Create many SignosVitales
     * const signosVitales = await prisma.signosVitales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignosVitalesCreateManyArgs>(args?: SelectSubset<T, SignosVitalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SignosVitales and returns the data saved in the database.
     * @param {SignosVitalesCreateManyAndReturnArgs} args - Arguments to create many SignosVitales.
     * @example
     * // Create many SignosVitales
     * const signosVitales = await prisma.signosVitales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SignosVitales and only return the `id`
     * const signosVitalesWithIdOnly = await prisma.signosVitales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignosVitalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SignosVitalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SignosVitales.
     * @param {SignosVitalesDeleteArgs} args - Arguments to delete one SignosVitales.
     * @example
     * // Delete one SignosVitales
     * const SignosVitales = await prisma.signosVitales.delete({
     *   where: {
     *     // ... filter to delete one SignosVitales
     *   }
     * })
     * 
     */
    delete<T extends SignosVitalesDeleteArgs>(args: SelectSubset<T, SignosVitalesDeleteArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SignosVitales.
     * @param {SignosVitalesUpdateArgs} args - Arguments to update one SignosVitales.
     * @example
     * // Update one SignosVitales
     * const signosVitales = await prisma.signosVitales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignosVitalesUpdateArgs>(args: SelectSubset<T, SignosVitalesUpdateArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SignosVitales.
     * @param {SignosVitalesDeleteManyArgs} args - Arguments to filter SignosVitales to delete.
     * @example
     * // Delete a few SignosVitales
     * const { count } = await prisma.signosVitales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignosVitalesDeleteManyArgs>(args?: SelectSubset<T, SignosVitalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignosVitales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SignosVitales
     * const signosVitales = await prisma.signosVitales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignosVitalesUpdateManyArgs>(args: SelectSubset<T, SignosVitalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignosVitales and returns the data updated in the database.
     * @param {SignosVitalesUpdateManyAndReturnArgs} args - Arguments to update many SignosVitales.
     * @example
     * // Update many SignosVitales
     * const signosVitales = await prisma.signosVitales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SignosVitales and only return the `id`
     * const signosVitalesWithIdOnly = await prisma.signosVitales.updateManyAndReturn({
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
    updateManyAndReturn<T extends SignosVitalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SignosVitalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SignosVitales.
     * @param {SignosVitalesUpsertArgs} args - Arguments to update or create a SignosVitales.
     * @example
     * // Update or create a SignosVitales
     * const signosVitales = await prisma.signosVitales.upsert({
     *   create: {
     *     // ... data to create a SignosVitales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SignosVitales we want to update
     *   }
     * })
     */
    upsert<T extends SignosVitalesUpsertArgs>(args: SelectSubset<T, SignosVitalesUpsertArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SignosVitales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesCountArgs} args - Arguments to filter SignosVitales to count.
     * @example
     * // Count the number of SignosVitales
     * const count = await prisma.signosVitales.count({
     *   where: {
     *     // ... the filter for the SignosVitales we want to count
     *   }
     * })
    **/
    count<T extends SignosVitalesCountArgs>(
      args?: Subset<T, SignosVitalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignosVitalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SignosVitales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SignosVitalesAggregateArgs>(args: Subset<T, SignosVitalesAggregateArgs>): Prisma.PrismaPromise<GetSignosVitalesAggregateType<T>>

    /**
     * Group by SignosVitales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignosVitalesGroupByArgs} args - Group by arguments.
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
      T extends SignosVitalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignosVitalesGroupByArgs['orderBy'] }
        : { orderBy?: SignosVitalesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SignosVitalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignosVitalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SignosVitales model
   */
  readonly fields: SignosVitalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SignosVitales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignosVitalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resultados<T extends SignosVitales$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, SignosVitales$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SignosVitales model
   */
  interface SignosVitalesFieldRefs {
    readonly id: FieldRef<"SignosVitales", 'Int'>
    readonly frecuencia_cardiaca: FieldRef<"SignosVitales", 'Float'>
    readonly presion_arterial: FieldRef<"SignosVitales", 'Float'>
    readonly frecuencia_respiratoria: FieldRef<"SignosVitales", 'Float'>
    readonly temperatura_corporal: FieldRef<"SignosVitales", 'Float'>
    readonly saturacion_oxigeno: FieldRef<"SignosVitales", 'Float'>
    readonly procalcitonina: FieldRef<"SignosVitales", 'Float'>
    readonly lactato: FieldRef<"SignosVitales", 'Float'>
    readonly proteina_creactiva: FieldRef<"SignosVitales", 'Float'>
    readonly leucocitos: FieldRef<"SignosVitales", 'Float'>
    readonly patologias_presentes: FieldRef<"SignosVitales", 'String'>
    readonly horario: FieldRef<"SignosVitales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SignosVitales findUnique
   */
  export type SignosVitalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * Filter, which SignosVitales to fetch.
     */
    where: SignosVitalesWhereUniqueInput
  }

  /**
   * SignosVitales findUniqueOrThrow
   */
  export type SignosVitalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * Filter, which SignosVitales to fetch.
     */
    where: SignosVitalesWhereUniqueInput
  }

  /**
   * SignosVitales findFirst
   */
  export type SignosVitalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * Filter, which SignosVitales to fetch.
     */
    where?: SignosVitalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignosVitales to fetch.
     */
    orderBy?: SignosVitalesOrderByWithRelationInput | SignosVitalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignosVitales.
     */
    cursor?: SignosVitalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignosVitales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignosVitales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignosVitales.
     */
    distinct?: SignosVitalesScalarFieldEnum | SignosVitalesScalarFieldEnum[]
  }

  /**
   * SignosVitales findFirstOrThrow
   */
  export type SignosVitalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * Filter, which SignosVitales to fetch.
     */
    where?: SignosVitalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignosVitales to fetch.
     */
    orderBy?: SignosVitalesOrderByWithRelationInput | SignosVitalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignosVitales.
     */
    cursor?: SignosVitalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignosVitales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignosVitales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignosVitales.
     */
    distinct?: SignosVitalesScalarFieldEnum | SignosVitalesScalarFieldEnum[]
  }

  /**
   * SignosVitales findMany
   */
  export type SignosVitalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * Filter, which SignosVitales to fetch.
     */
    where?: SignosVitalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignosVitales to fetch.
     */
    orderBy?: SignosVitalesOrderByWithRelationInput | SignosVitalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SignosVitales.
     */
    cursor?: SignosVitalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignosVitales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignosVitales.
     */
    skip?: number
    distinct?: SignosVitalesScalarFieldEnum | SignosVitalesScalarFieldEnum[]
  }

  /**
   * SignosVitales create
   */
  export type SignosVitalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * The data needed to create a SignosVitales.
     */
    data: XOR<SignosVitalesCreateInput, SignosVitalesUncheckedCreateInput>
  }

  /**
   * SignosVitales createMany
   */
  export type SignosVitalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SignosVitales.
     */
    data: SignosVitalesCreateManyInput | SignosVitalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignosVitales createManyAndReturn
   */
  export type SignosVitalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * The data used to create many SignosVitales.
     */
    data: SignosVitalesCreateManyInput | SignosVitalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignosVitales update
   */
  export type SignosVitalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * The data needed to update a SignosVitales.
     */
    data: XOR<SignosVitalesUpdateInput, SignosVitalesUncheckedUpdateInput>
    /**
     * Choose, which SignosVitales to update.
     */
    where: SignosVitalesWhereUniqueInput
  }

  /**
   * SignosVitales updateMany
   */
  export type SignosVitalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SignosVitales.
     */
    data: XOR<SignosVitalesUpdateManyMutationInput, SignosVitalesUncheckedUpdateManyInput>
    /**
     * Filter which SignosVitales to update
     */
    where?: SignosVitalesWhereInput
    /**
     * Limit how many SignosVitales to update.
     */
    limit?: number
  }

  /**
   * SignosVitales updateManyAndReturn
   */
  export type SignosVitalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * The data used to update SignosVitales.
     */
    data: XOR<SignosVitalesUpdateManyMutationInput, SignosVitalesUncheckedUpdateManyInput>
    /**
     * Filter which SignosVitales to update
     */
    where?: SignosVitalesWhereInput
    /**
     * Limit how many SignosVitales to update.
     */
    limit?: number
  }

  /**
   * SignosVitales upsert
   */
  export type SignosVitalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * The filter to search for the SignosVitales to update in case it exists.
     */
    where: SignosVitalesWhereUniqueInput
    /**
     * In case the SignosVitales found by the `where` argument doesn't exist, create a new SignosVitales with this data.
     */
    create: XOR<SignosVitalesCreateInput, SignosVitalesUncheckedCreateInput>
    /**
     * In case the SignosVitales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignosVitalesUpdateInput, SignosVitalesUncheckedUpdateInput>
  }

  /**
   * SignosVitales delete
   */
  export type SignosVitalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
    /**
     * Filter which SignosVitales to delete.
     */
    where: SignosVitalesWhereUniqueInput
  }

  /**
   * SignosVitales deleteMany
   */
  export type SignosVitalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignosVitales to delete
     */
    where?: SignosVitalesWhereInput
    /**
     * Limit how many SignosVitales to delete.
     */
    limit?: number
  }

  /**
   * SignosVitales.resultados
   */
  export type SignosVitales$resultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    where?: ResultadoWhereInput
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    cursor?: ResultadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * SignosVitales without action
   */
  export type SignosVitalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignosVitales
     */
    select?: SignosVitalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignosVitales
     */
    omit?: SignosVitalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignosVitalesInclude<ExtArgs> | null
  }


  /**
   * Model Resultado
   */

  export type AggregateResultado = {
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  export type ResultadoAvgAggregateOutputType = {
    id: number | null
    resultado: number | null
    signoVitalId: number | null
  }

  export type ResultadoSumAggregateOutputType = {
    id: number | null
    resultado: number | null
    signoVitalId: number | null
  }

  export type ResultadoMinAggregateOutputType = {
    id: number | null
    resultado: number | null
    signoVitalId: number | null
  }

  export type ResultadoMaxAggregateOutputType = {
    id: number | null
    resultado: number | null
    signoVitalId: number | null
  }

  export type ResultadoCountAggregateOutputType = {
    id: number
    resultado: number
    signoVitalId: number
    _all: number
  }


  export type ResultadoAvgAggregateInputType = {
    id?: true
    resultado?: true
    signoVitalId?: true
  }

  export type ResultadoSumAggregateInputType = {
    id?: true
    resultado?: true
    signoVitalId?: true
  }

  export type ResultadoMinAggregateInputType = {
    id?: true
    resultado?: true
    signoVitalId?: true
  }

  export type ResultadoMaxAggregateInputType = {
    id?: true
    resultado?: true
    signoVitalId?: true
  }

  export type ResultadoCountAggregateInputType = {
    id?: true
    resultado?: true
    signoVitalId?: true
    _all?: true
  }

  export type ResultadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultado to aggregate.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resultados
    **/
    _count?: true | ResultadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadoMaxAggregateInputType
  }

  export type GetResultadoAggregateType<T extends ResultadoAggregateArgs> = {
        [P in keyof T & keyof AggregateResultado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultado[P]>
      : GetScalarType<T[P], AggregateResultado[P]>
  }




  export type ResultadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
    orderBy?: ResultadoOrderByWithAggregationInput | ResultadoOrderByWithAggregationInput[]
    by: ResultadoScalarFieldEnum[] | ResultadoScalarFieldEnum
    having?: ResultadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadoCountAggregateInputType | true
    _avg?: ResultadoAvgAggregateInputType
    _sum?: ResultadoSumAggregateInputType
    _min?: ResultadoMinAggregateInputType
    _max?: ResultadoMaxAggregateInputType
  }

  export type ResultadoGroupByOutputType = {
    id: number
    resultado: number
    signoVitalId: number
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  type GetResultadoGroupByPayload<T extends ResultadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
        }
      >
    >


  export type ResultadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultado?: boolean
    signoVitalId?: boolean
    signoVital?: boolean | SignosVitalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultado?: boolean
    signoVitalId?: boolean
    signoVital?: boolean | SignosVitalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultado?: boolean
    signoVitalId?: boolean
    signoVital?: boolean | SignosVitalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectScalar = {
    id?: boolean
    resultado?: boolean
    signoVitalId?: boolean
  }

  export type ResultadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resultado" | "signoVitalId", ExtArgs["result"]["resultado"]>
  export type ResultadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signoVital?: boolean | SignosVitalesDefaultArgs<ExtArgs>
  }
  export type ResultadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signoVital?: boolean | SignosVitalesDefaultArgs<ExtArgs>
  }
  export type ResultadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signoVital?: boolean | SignosVitalesDefaultArgs<ExtArgs>
  }

  export type $ResultadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resultado"
    objects: {
      signoVital: Prisma.$SignosVitalesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resultado: number
      signoVitalId: number
    }, ExtArgs["result"]["resultado"]>
    composites: {}
  }

  type ResultadoGetPayload<S extends boolean | null | undefined | ResultadoDefaultArgs> = $Result.GetResult<Prisma.$ResultadoPayload, S>

  type ResultadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultadoCountAggregateInputType | true
    }

  export interface ResultadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resultado'], meta: { name: 'Resultado' } }
    /**
     * Find zero or one Resultado that matches the filter.
     * @param {ResultadoFindUniqueArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultadoFindUniqueArgs>(args: SelectSubset<T, ResultadoFindUniqueArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resultado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultadoFindUniqueOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultadoFindFirstArgs>(args?: SelectSubset<T, ResultadoFindFirstArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultados
     * const resultados = await prisma.resultado.findMany()
     * 
     * // Get first 10 Resultados
     * const resultados = await prisma.resultado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadoWithIdOnly = await prisma.resultado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultadoFindManyArgs>(args?: SelectSubset<T, ResultadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resultado.
     * @param {ResultadoCreateArgs} args - Arguments to create a Resultado.
     * @example
     * // Create one Resultado
     * const Resultado = await prisma.resultado.create({
     *   data: {
     *     // ... data to create a Resultado
     *   }
     * })
     * 
     */
    create<T extends ResultadoCreateArgs>(args: SelectSubset<T, ResultadoCreateArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resultados.
     * @param {ResultadoCreateManyArgs} args - Arguments to create many Resultados.
     * @example
     * // Create many Resultados
     * const resultado = await prisma.resultado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultadoCreateManyArgs>(args?: SelectSubset<T, ResultadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resultados and returns the data saved in the database.
     * @param {ResultadoCreateManyAndReturnArgs} args - Arguments to create many Resultados.
     * @example
     * // Create many Resultados
     * const resultado = await prisma.resultado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resultados and only return the `id`
     * const resultadoWithIdOnly = await prisma.resultado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resultado.
     * @param {ResultadoDeleteArgs} args - Arguments to delete one Resultado.
     * @example
     * // Delete one Resultado
     * const Resultado = await prisma.resultado.delete({
     *   where: {
     *     // ... filter to delete one Resultado
     *   }
     * })
     * 
     */
    delete<T extends ResultadoDeleteArgs>(args: SelectSubset<T, ResultadoDeleteArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resultado.
     * @param {ResultadoUpdateArgs} args - Arguments to update one Resultado.
     * @example
     * // Update one Resultado
     * const resultado = await prisma.resultado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultadoUpdateArgs>(args: SelectSubset<T, ResultadoUpdateArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resultados.
     * @param {ResultadoDeleteManyArgs} args - Arguments to filter Resultados to delete.
     * @example
     * // Delete a few Resultados
     * const { count } = await prisma.resultado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultadoDeleteManyArgs>(args?: SelectSubset<T, ResultadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultadoUpdateManyArgs>(args: SelectSubset<T, ResultadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados and returns the data updated in the database.
     * @param {ResultadoUpdateManyAndReturnArgs} args - Arguments to update many Resultados.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resultados and only return the `id`
     * const resultadoWithIdOnly = await prisma.resultado.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResultadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resultado.
     * @param {ResultadoUpsertArgs} args - Arguments to update or create a Resultado.
     * @example
     * // Update or create a Resultado
     * const resultado = await prisma.resultado.upsert({
     *   create: {
     *     // ... data to create a Resultado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultado we want to update
     *   }
     * })
     */
    upsert<T extends ResultadoUpsertArgs>(args: SelectSubset<T, ResultadoUpsertArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoCountArgs} args - Arguments to filter Resultados to count.
     * @example
     * // Count the number of Resultados
     * const count = await prisma.resultado.count({
     *   where: {
     *     // ... the filter for the Resultados we want to count
     *   }
     * })
    **/
    count<T extends ResultadoCountArgs>(
      args?: Subset<T, ResultadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultadoAggregateArgs>(args: Subset<T, ResultadoAggregateArgs>): Prisma.PrismaPromise<GetResultadoAggregateType<T>>

    /**
     * Group by Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoGroupByArgs} args - Group by arguments.
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
      T extends ResultadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadoGroupByArgs['orderBy'] }
        : { orderBy?: ResultadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resultado model
   */
  readonly fields: ResultadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resultado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signoVital<T extends SignosVitalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignosVitalesDefaultArgs<ExtArgs>>): Prisma__SignosVitalesClient<$Result.GetResult<Prisma.$SignosVitalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resultado model
   */
  interface ResultadoFieldRefs {
    readonly id: FieldRef<"Resultado", 'Int'>
    readonly resultado: FieldRef<"Resultado", 'Float'>
    readonly signoVitalId: FieldRef<"Resultado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resultado findUnique
   */
  export type ResultadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findUniqueOrThrow
   */
  export type ResultadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findFirst
   */
  export type ResultadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado findFirstOrThrow
   */
  export type ResultadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado findMany
   */
  export type ResultadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado create
   */
  export type ResultadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Resultado.
     */
    data: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
  }

  /**
   * Resultado createMany
   */
  export type ResultadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resultados.
     */
    data: ResultadoCreateManyInput | ResultadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resultado createManyAndReturn
   */
  export type ResultadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * The data used to create many Resultados.
     */
    data: ResultadoCreateManyInput | ResultadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultado update
   */
  export type ResultadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Resultado.
     */
    data: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
    /**
     * Choose, which Resultado to update.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado updateMany
   */
  export type ResultadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to update.
     */
    limit?: number
  }

  /**
   * Resultado updateManyAndReturn
   */
  export type ResultadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultado upsert
   */
  export type ResultadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Resultado to update in case it exists.
     */
    where: ResultadoWhereUniqueInput
    /**
     * In case the Resultado found by the `where` argument doesn't exist, create a new Resultado with this data.
     */
    create: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
    /**
     * In case the Resultado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
  }

  /**
   * Resultado delete
   */
  export type ResultadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter which Resultado to delete.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado deleteMany
   */
  export type ResultadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultados to delete
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to delete.
     */
    limit?: number
  }

  /**
   * Resultado without action
   */
  export type ResultadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SignosVitalesScalarFieldEnum: {
    id: 'id',
    frecuencia_cardiaca: 'frecuencia_cardiaca',
    presion_arterial: 'presion_arterial',
    frecuencia_respiratoria: 'frecuencia_respiratoria',
    temperatura_corporal: 'temperatura_corporal',
    saturacion_oxigeno: 'saturacion_oxigeno',
    procalcitonina: 'procalcitonina',
    lactato: 'lactato',
    proteina_creactiva: 'proteina_creactiva',
    leucocitos: 'leucocitos',
    patologias_presentes: 'patologias_presentes',
    horario: 'horario'
  };

  export type SignosVitalesScalarFieldEnum = (typeof SignosVitalesScalarFieldEnum)[keyof typeof SignosVitalesScalarFieldEnum]


  export const ResultadoScalarFieldEnum: {
    id: 'id',
    resultado: 'resultado',
    signoVitalId: 'signoVitalId'
  };

  export type ResultadoScalarFieldEnum = (typeof ResultadoScalarFieldEnum)[keyof typeof ResultadoScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type SignosVitalesWhereInput = {
    AND?: SignosVitalesWhereInput | SignosVitalesWhereInput[]
    OR?: SignosVitalesWhereInput[]
    NOT?: SignosVitalesWhereInput | SignosVitalesWhereInput[]
    id?: IntFilter<"SignosVitales"> | number
    frecuencia_cardiaca?: FloatFilter<"SignosVitales"> | number
    presion_arterial?: FloatFilter<"SignosVitales"> | number
    frecuencia_respiratoria?: FloatFilter<"SignosVitales"> | number
    temperatura_corporal?: FloatFilter<"SignosVitales"> | number
    saturacion_oxigeno?: FloatFilter<"SignosVitales"> | number
    procalcitonina?: FloatFilter<"SignosVitales"> | number
    lactato?: FloatFilter<"SignosVitales"> | number
    proteina_creactiva?: FloatFilter<"SignosVitales"> | number
    leucocitos?: FloatFilter<"SignosVitales"> | number
    patologias_presentes?: StringFilter<"SignosVitales"> | string
    horario?: DateTimeFilter<"SignosVitales"> | Date | string
    resultados?: ResultadoListRelationFilter
  }

  export type SignosVitalesOrderByWithRelationInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
    patologias_presentes?: SortOrder
    horario?: SortOrder
    resultados?: ResultadoOrderByRelationAggregateInput
  }

  export type SignosVitalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SignosVitalesWhereInput | SignosVitalesWhereInput[]
    OR?: SignosVitalesWhereInput[]
    NOT?: SignosVitalesWhereInput | SignosVitalesWhereInput[]
    frecuencia_cardiaca?: FloatFilter<"SignosVitales"> | number
    presion_arterial?: FloatFilter<"SignosVitales"> | number
    frecuencia_respiratoria?: FloatFilter<"SignosVitales"> | number
    temperatura_corporal?: FloatFilter<"SignosVitales"> | number
    saturacion_oxigeno?: FloatFilter<"SignosVitales"> | number
    procalcitonina?: FloatFilter<"SignosVitales"> | number
    lactato?: FloatFilter<"SignosVitales"> | number
    proteina_creactiva?: FloatFilter<"SignosVitales"> | number
    leucocitos?: FloatFilter<"SignosVitales"> | number
    patologias_presentes?: StringFilter<"SignosVitales"> | string
    horario?: DateTimeFilter<"SignosVitales"> | Date | string
    resultados?: ResultadoListRelationFilter
  }, "id">

  export type SignosVitalesOrderByWithAggregationInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
    patologias_presentes?: SortOrder
    horario?: SortOrder
    _count?: SignosVitalesCountOrderByAggregateInput
    _avg?: SignosVitalesAvgOrderByAggregateInput
    _max?: SignosVitalesMaxOrderByAggregateInput
    _min?: SignosVitalesMinOrderByAggregateInput
    _sum?: SignosVitalesSumOrderByAggregateInput
  }

  export type SignosVitalesScalarWhereWithAggregatesInput = {
    AND?: SignosVitalesScalarWhereWithAggregatesInput | SignosVitalesScalarWhereWithAggregatesInput[]
    OR?: SignosVitalesScalarWhereWithAggregatesInput[]
    NOT?: SignosVitalesScalarWhereWithAggregatesInput | SignosVitalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SignosVitales"> | number
    frecuencia_cardiaca?: FloatWithAggregatesFilter<"SignosVitales"> | number
    presion_arterial?: FloatWithAggregatesFilter<"SignosVitales"> | number
    frecuencia_respiratoria?: FloatWithAggregatesFilter<"SignosVitales"> | number
    temperatura_corporal?: FloatWithAggregatesFilter<"SignosVitales"> | number
    saturacion_oxigeno?: FloatWithAggregatesFilter<"SignosVitales"> | number
    procalcitonina?: FloatWithAggregatesFilter<"SignosVitales"> | number
    lactato?: FloatWithAggregatesFilter<"SignosVitales"> | number
    proteina_creactiva?: FloatWithAggregatesFilter<"SignosVitales"> | number
    leucocitos?: FloatWithAggregatesFilter<"SignosVitales"> | number
    patologias_presentes?: StringWithAggregatesFilter<"SignosVitales"> | string
    horario?: DateTimeWithAggregatesFilter<"SignosVitales"> | Date | string
  }

  export type ResultadoWhereInput = {
    AND?: ResultadoWhereInput | ResultadoWhereInput[]
    OR?: ResultadoWhereInput[]
    NOT?: ResultadoWhereInput | ResultadoWhereInput[]
    id?: IntFilter<"Resultado"> | number
    resultado?: FloatFilter<"Resultado"> | number
    signoVitalId?: IntFilter<"Resultado"> | number
    signoVital?: XOR<SignosVitalesScalarRelationFilter, SignosVitalesWhereInput>
  }

  export type ResultadoOrderByWithRelationInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
    signoVital?: SignosVitalesOrderByWithRelationInput
  }

  export type ResultadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResultadoWhereInput | ResultadoWhereInput[]
    OR?: ResultadoWhereInput[]
    NOT?: ResultadoWhereInput | ResultadoWhereInput[]
    resultado?: FloatFilter<"Resultado"> | number
    signoVitalId?: IntFilter<"Resultado"> | number
    signoVital?: XOR<SignosVitalesScalarRelationFilter, SignosVitalesWhereInput>
  }, "id">

  export type ResultadoOrderByWithAggregationInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
    _count?: ResultadoCountOrderByAggregateInput
    _avg?: ResultadoAvgOrderByAggregateInput
    _max?: ResultadoMaxOrderByAggregateInput
    _min?: ResultadoMinOrderByAggregateInput
    _sum?: ResultadoSumOrderByAggregateInput
  }

  export type ResultadoScalarWhereWithAggregatesInput = {
    AND?: ResultadoScalarWhereWithAggregatesInput | ResultadoScalarWhereWithAggregatesInput[]
    OR?: ResultadoScalarWhereWithAggregatesInput[]
    NOT?: ResultadoScalarWhereWithAggregatesInput | ResultadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resultado"> | number
    resultado?: FloatWithAggregatesFilter<"Resultado"> | number
    signoVitalId?: IntWithAggregatesFilter<"Resultado"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SignosVitalesCreateInput = {
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: string
    horario?: Date | string
    resultados?: ResultadoCreateNestedManyWithoutSignoVitalInput
  }

  export type SignosVitalesUncheckedCreateInput = {
    id?: number
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: string
    horario?: Date | string
    resultados?: ResultadoUncheckedCreateNestedManyWithoutSignoVitalInput
  }

  export type SignosVitalesUpdateInput = {
    frecuencia_cardiaca?: FloatFieldUpdateOperationsInput | number
    presion_arterial?: FloatFieldUpdateOperationsInput | number
    frecuencia_respiratoria?: FloatFieldUpdateOperationsInput | number
    temperatura_corporal?: FloatFieldUpdateOperationsInput | number
    saturacion_oxigeno?: FloatFieldUpdateOperationsInput | number
    procalcitonina?: FloatFieldUpdateOperationsInput | number
    lactato?: FloatFieldUpdateOperationsInput | number
    proteina_creactiva?: FloatFieldUpdateOperationsInput | number
    leucocitos?: FloatFieldUpdateOperationsInput | number
    patologias_presentes?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUpdateManyWithoutSignoVitalNestedInput
  }

  export type SignosVitalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    frecuencia_cardiaca?: FloatFieldUpdateOperationsInput | number
    presion_arterial?: FloatFieldUpdateOperationsInput | number
    frecuencia_respiratoria?: FloatFieldUpdateOperationsInput | number
    temperatura_corporal?: FloatFieldUpdateOperationsInput | number
    saturacion_oxigeno?: FloatFieldUpdateOperationsInput | number
    procalcitonina?: FloatFieldUpdateOperationsInput | number
    lactato?: FloatFieldUpdateOperationsInput | number
    proteina_creactiva?: FloatFieldUpdateOperationsInput | number
    leucocitos?: FloatFieldUpdateOperationsInput | number
    patologias_presentes?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados?: ResultadoUncheckedUpdateManyWithoutSignoVitalNestedInput
  }

  export type SignosVitalesCreateManyInput = {
    id?: number
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: string
    horario?: Date | string
  }

  export type SignosVitalesUpdateManyMutationInput = {
    frecuencia_cardiaca?: FloatFieldUpdateOperationsInput | number
    presion_arterial?: FloatFieldUpdateOperationsInput | number
    frecuencia_respiratoria?: FloatFieldUpdateOperationsInput | number
    temperatura_corporal?: FloatFieldUpdateOperationsInput | number
    saturacion_oxigeno?: FloatFieldUpdateOperationsInput | number
    procalcitonina?: FloatFieldUpdateOperationsInput | number
    lactato?: FloatFieldUpdateOperationsInput | number
    proteina_creactiva?: FloatFieldUpdateOperationsInput | number
    leucocitos?: FloatFieldUpdateOperationsInput | number
    patologias_presentes?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignosVitalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    frecuencia_cardiaca?: FloatFieldUpdateOperationsInput | number
    presion_arterial?: FloatFieldUpdateOperationsInput | number
    frecuencia_respiratoria?: FloatFieldUpdateOperationsInput | number
    temperatura_corporal?: FloatFieldUpdateOperationsInput | number
    saturacion_oxigeno?: FloatFieldUpdateOperationsInput | number
    procalcitonina?: FloatFieldUpdateOperationsInput | number
    lactato?: FloatFieldUpdateOperationsInput | number
    proteina_creactiva?: FloatFieldUpdateOperationsInput | number
    leucocitos?: FloatFieldUpdateOperationsInput | number
    patologias_presentes?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateInput = {
    resultado: number
    signoVital: SignosVitalesCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoUncheckedCreateInput = {
    id?: number
    resultado: number
    signoVitalId: number
  }

  export type ResultadoUpdateInput = {
    resultado?: FloatFieldUpdateOperationsInput | number
    signoVital?: SignosVitalesUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    signoVitalId?: IntFieldUpdateOperationsInput | number
  }

  export type ResultadoCreateManyInput = {
    id?: number
    resultado: number
    signoVitalId: number
  }

  export type ResultadoUpdateManyMutationInput = {
    resultado?: FloatFieldUpdateOperationsInput | number
  }

  export type ResultadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
    signoVitalId?: IntFieldUpdateOperationsInput | number
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type ResultadoListRelationFilter = {
    every?: ResultadoWhereInput
    some?: ResultadoWhereInput
    none?: ResultadoWhereInput
  }

  export type ResultadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignosVitalesCountOrderByAggregateInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
    patologias_presentes?: SortOrder
    horario?: SortOrder
  }

  export type SignosVitalesAvgOrderByAggregateInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
  }

  export type SignosVitalesMaxOrderByAggregateInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
    patologias_presentes?: SortOrder
    horario?: SortOrder
  }

  export type SignosVitalesMinOrderByAggregateInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
    patologias_presentes?: SortOrder
    horario?: SortOrder
  }

  export type SignosVitalesSumOrderByAggregateInput = {
    id?: SortOrder
    frecuencia_cardiaca?: SortOrder
    presion_arterial?: SortOrder
    frecuencia_respiratoria?: SortOrder
    temperatura_corporal?: SortOrder
    saturacion_oxigeno?: SortOrder
    procalcitonina?: SortOrder
    lactato?: SortOrder
    proteina_creactiva?: SortOrder
    leucocitos?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SignosVitalesScalarRelationFilter = {
    is?: SignosVitalesWhereInput
    isNot?: SignosVitalesWhereInput
  }

  export type ResultadoCountOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
  }

  export type ResultadoAvgOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
  }

  export type ResultadoMaxOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
  }

  export type ResultadoMinOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
  }

  export type ResultadoSumOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    signoVitalId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResultadoCreateNestedManyWithoutSignoVitalInput = {
    create?: XOR<ResultadoCreateWithoutSignoVitalInput, ResultadoUncheckedCreateWithoutSignoVitalInput> | ResultadoCreateWithoutSignoVitalInput[] | ResultadoUncheckedCreateWithoutSignoVitalInput[]
    connectOrCreate?: ResultadoCreateOrConnectWithoutSignoVitalInput | ResultadoCreateOrConnectWithoutSignoVitalInput[]
    createMany?: ResultadoCreateManySignoVitalInputEnvelope
    connect?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
  }

  export type ResultadoUncheckedCreateNestedManyWithoutSignoVitalInput = {
    create?: XOR<ResultadoCreateWithoutSignoVitalInput, ResultadoUncheckedCreateWithoutSignoVitalInput> | ResultadoCreateWithoutSignoVitalInput[] | ResultadoUncheckedCreateWithoutSignoVitalInput[]
    connectOrCreate?: ResultadoCreateOrConnectWithoutSignoVitalInput | ResultadoCreateOrConnectWithoutSignoVitalInput[]
    createMany?: ResultadoCreateManySignoVitalInputEnvelope
    connect?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResultadoUpdateManyWithoutSignoVitalNestedInput = {
    create?: XOR<ResultadoCreateWithoutSignoVitalInput, ResultadoUncheckedCreateWithoutSignoVitalInput> | ResultadoCreateWithoutSignoVitalInput[] | ResultadoUncheckedCreateWithoutSignoVitalInput[]
    connectOrCreate?: ResultadoCreateOrConnectWithoutSignoVitalInput | ResultadoCreateOrConnectWithoutSignoVitalInput[]
    upsert?: ResultadoUpsertWithWhereUniqueWithoutSignoVitalInput | ResultadoUpsertWithWhereUniqueWithoutSignoVitalInput[]
    createMany?: ResultadoCreateManySignoVitalInputEnvelope
    set?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    disconnect?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    delete?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    connect?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    update?: ResultadoUpdateWithWhereUniqueWithoutSignoVitalInput | ResultadoUpdateWithWhereUniqueWithoutSignoVitalInput[]
    updateMany?: ResultadoUpdateManyWithWhereWithoutSignoVitalInput | ResultadoUpdateManyWithWhereWithoutSignoVitalInput[]
    deleteMany?: ResultadoScalarWhereInput | ResultadoScalarWhereInput[]
  }

  export type ResultadoUncheckedUpdateManyWithoutSignoVitalNestedInput = {
    create?: XOR<ResultadoCreateWithoutSignoVitalInput, ResultadoUncheckedCreateWithoutSignoVitalInput> | ResultadoCreateWithoutSignoVitalInput[] | ResultadoUncheckedCreateWithoutSignoVitalInput[]
    connectOrCreate?: ResultadoCreateOrConnectWithoutSignoVitalInput | ResultadoCreateOrConnectWithoutSignoVitalInput[]
    upsert?: ResultadoUpsertWithWhereUniqueWithoutSignoVitalInput | ResultadoUpsertWithWhereUniqueWithoutSignoVitalInput[]
    createMany?: ResultadoCreateManySignoVitalInputEnvelope
    set?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    disconnect?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    delete?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    connect?: ResultadoWhereUniqueInput | ResultadoWhereUniqueInput[]
    update?: ResultadoUpdateWithWhereUniqueWithoutSignoVitalInput | ResultadoUpdateWithWhereUniqueWithoutSignoVitalInput[]
    updateMany?: ResultadoUpdateManyWithWhereWithoutSignoVitalInput | ResultadoUpdateManyWithWhereWithoutSignoVitalInput[]
    deleteMany?: ResultadoScalarWhereInput | ResultadoScalarWhereInput[]
  }

  export type SignosVitalesCreateNestedOneWithoutResultadosInput = {
    create?: XOR<SignosVitalesCreateWithoutResultadosInput, SignosVitalesUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: SignosVitalesCreateOrConnectWithoutResultadosInput
    connect?: SignosVitalesWhereUniqueInput
  }

  export type SignosVitalesUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<SignosVitalesCreateWithoutResultadosInput, SignosVitalesUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: SignosVitalesCreateOrConnectWithoutResultadosInput
    upsert?: SignosVitalesUpsertWithoutResultadosInput
    connect?: SignosVitalesWhereUniqueInput
    update?: XOR<XOR<SignosVitalesUpdateToOneWithWhereWithoutResultadosInput, SignosVitalesUpdateWithoutResultadosInput>, SignosVitalesUncheckedUpdateWithoutResultadosInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ResultadoCreateWithoutSignoVitalInput = {
    resultado: number
  }

  export type ResultadoUncheckedCreateWithoutSignoVitalInput = {
    id?: number
    resultado: number
  }

  export type ResultadoCreateOrConnectWithoutSignoVitalInput = {
    where: ResultadoWhereUniqueInput
    create: XOR<ResultadoCreateWithoutSignoVitalInput, ResultadoUncheckedCreateWithoutSignoVitalInput>
  }

  export type ResultadoCreateManySignoVitalInputEnvelope = {
    data: ResultadoCreateManySignoVitalInput | ResultadoCreateManySignoVitalInput[]
    skipDuplicates?: boolean
  }

  export type ResultadoUpsertWithWhereUniqueWithoutSignoVitalInput = {
    where: ResultadoWhereUniqueInput
    update: XOR<ResultadoUpdateWithoutSignoVitalInput, ResultadoUncheckedUpdateWithoutSignoVitalInput>
    create: XOR<ResultadoCreateWithoutSignoVitalInput, ResultadoUncheckedCreateWithoutSignoVitalInput>
  }

  export type ResultadoUpdateWithWhereUniqueWithoutSignoVitalInput = {
    where: ResultadoWhereUniqueInput
    data: XOR<ResultadoUpdateWithoutSignoVitalInput, ResultadoUncheckedUpdateWithoutSignoVitalInput>
  }

  export type ResultadoUpdateManyWithWhereWithoutSignoVitalInput = {
    where: ResultadoScalarWhereInput
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyWithoutSignoVitalInput>
  }

  export type ResultadoScalarWhereInput = {
    AND?: ResultadoScalarWhereInput | ResultadoScalarWhereInput[]
    OR?: ResultadoScalarWhereInput[]
    NOT?: ResultadoScalarWhereInput | ResultadoScalarWhereInput[]
    id?: IntFilter<"Resultado"> | number
    resultado?: FloatFilter<"Resultado"> | number
    signoVitalId?: IntFilter<"Resultado"> | number
  }

  export type SignosVitalesCreateWithoutResultadosInput = {
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: string
    horario?: Date | string
  }

  export type SignosVitalesUncheckedCreateWithoutResultadosInput = {
    id?: number
    frecuencia_cardiaca: number
    presion_arterial: number
    frecuencia_respiratoria: number
    temperatura_corporal: number
    saturacion_oxigeno: number
    procalcitonina: number
    lactato: number
    proteina_creactiva: number
    leucocitos: number
    patologias_presentes: string
    horario?: Date | string
  }

  export type SignosVitalesCreateOrConnectWithoutResultadosInput = {
    where: SignosVitalesWhereUniqueInput
    create: XOR<SignosVitalesCreateWithoutResultadosInput, SignosVitalesUncheckedCreateWithoutResultadosInput>
  }

  export type SignosVitalesUpsertWithoutResultadosInput = {
    update: XOR<SignosVitalesUpdateWithoutResultadosInput, SignosVitalesUncheckedUpdateWithoutResultadosInput>
    create: XOR<SignosVitalesCreateWithoutResultadosInput, SignosVitalesUncheckedCreateWithoutResultadosInput>
    where?: SignosVitalesWhereInput
  }

  export type SignosVitalesUpdateToOneWithWhereWithoutResultadosInput = {
    where?: SignosVitalesWhereInput
    data: XOR<SignosVitalesUpdateWithoutResultadosInput, SignosVitalesUncheckedUpdateWithoutResultadosInput>
  }

  export type SignosVitalesUpdateWithoutResultadosInput = {
    frecuencia_cardiaca?: FloatFieldUpdateOperationsInput | number
    presion_arterial?: FloatFieldUpdateOperationsInput | number
    frecuencia_respiratoria?: FloatFieldUpdateOperationsInput | number
    temperatura_corporal?: FloatFieldUpdateOperationsInput | number
    saturacion_oxigeno?: FloatFieldUpdateOperationsInput | number
    procalcitonina?: FloatFieldUpdateOperationsInput | number
    lactato?: FloatFieldUpdateOperationsInput | number
    proteina_creactiva?: FloatFieldUpdateOperationsInput | number
    leucocitos?: FloatFieldUpdateOperationsInput | number
    patologias_presentes?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignosVitalesUncheckedUpdateWithoutResultadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    frecuencia_cardiaca?: FloatFieldUpdateOperationsInput | number
    presion_arterial?: FloatFieldUpdateOperationsInput | number
    frecuencia_respiratoria?: FloatFieldUpdateOperationsInput | number
    temperatura_corporal?: FloatFieldUpdateOperationsInput | number
    saturacion_oxigeno?: FloatFieldUpdateOperationsInput | number
    procalcitonina?: FloatFieldUpdateOperationsInput | number
    lactato?: FloatFieldUpdateOperationsInput | number
    proteina_creactiva?: FloatFieldUpdateOperationsInput | number
    leucocitos?: FloatFieldUpdateOperationsInput | number
    patologias_presentes?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateManySignoVitalInput = {
    id?: number
    resultado: number
  }

  export type ResultadoUpdateWithoutSignoVitalInput = {
    resultado?: FloatFieldUpdateOperationsInput | number
  }

  export type ResultadoUncheckedUpdateWithoutSignoVitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
  }

  export type ResultadoUncheckedUpdateManyWithoutSignoVitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    resultado?: FloatFieldUpdateOperationsInput | number
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