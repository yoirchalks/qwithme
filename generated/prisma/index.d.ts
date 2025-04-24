
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
 * Model patients
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type patients = $Result.DefaultSelection<Prisma.$patientsPayload>
/**
 * Model ques
 * 
 */
export type ques = $Result.DefaultSelection<Prisma.$quesPayload>
/**
 * Model rooms
 * 
 */
export type rooms = $Result.DefaultSelection<Prisma.$roomsPayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model staff_rooms
 * 
 */
export type staff_rooms = $Result.DefaultSelection<Prisma.$staff_roomsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const que_status: {
  waiting: 'waiting',
  being_seen: 'being_seen',
  done: 'done',
  cancelled: 'cancelled'
};

export type que_status = (typeof que_status)[keyof typeof que_status]


export const staff_position: {
  doctor: 'doctor',
  pa: 'pa',
  nurse: 'nurse',
  secretary: 'secretary',
  IT: 'IT',
  maintenance: 'maintenance',
  manager: 'manager'
};

export type staff_position = (typeof staff_position)[keyof typeof staff_position]

}

export type que_status = $Enums.que_status

export const que_status: typeof $Enums.que_status

export type staff_position = $Enums.staff_position

export const staff_position: typeof $Enums.staff_position

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patients.findMany()
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
   * // Fetch zero or more Patients
   * const patients = await prisma.patients.findMany()
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
   * `prisma.patients`: Exposes CRUD operations for the **patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.patientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ques`: Exposes CRUD operations for the **ques** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ques
    * const ques = await prisma.ques.findMany()
    * ```
    */
  get ques(): Prisma.quesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.roomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff_rooms`: Exposes CRUD operations for the **staff_rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff_rooms
    * const staff_rooms = await prisma.staff_rooms.findMany()
    * ```
    */
  get staff_rooms(): Prisma.staff_roomsDelegate<ExtArgs, ClientOptions>;
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
    patients: 'patients',
    ques: 'ques',
    rooms: 'rooms',
    staff: 'staff',
    staff_rooms: 'staff_rooms'
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
      modelProps: "patients" | "ques" | "rooms" | "staff" | "staff_rooms"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      patients: {
        payload: Prisma.$patientsPayload<ExtArgs>
        fields: Prisma.patientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findFirst: {
            args: Prisma.patientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findMany: {
            args: Prisma.patientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          create: {
            args: Prisma.patientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          createMany: {
            args: Prisma.patientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          delete: {
            args: Prisma.patientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          update: {
            args: Prisma.patientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          deleteMany: {
            args: Prisma.patientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          upsert: {
            args: Prisma.patientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.patientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      ques: {
        payload: Prisma.$quesPayload<ExtArgs>
        fields: Prisma.quesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>
          }
          findFirst: {
            args: Prisma.quesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>
          }
          findMany: {
            args: Prisma.quesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>[]
          }
          create: {
            args: Prisma.quesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>
          }
          createMany: {
            args: Prisma.quesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.quesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>[]
          }
          delete: {
            args: Prisma.quesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>
          }
          update: {
            args: Prisma.quesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>
          }
          deleteMany: {
            args: Prisma.quesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.quesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.quesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>[]
          }
          upsert: {
            args: Prisma.quesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quesPayload>
          }
          aggregate: {
            args: Prisma.QuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQues>
          }
          groupBy: {
            args: Prisma.quesGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.quesCountArgs<ExtArgs>
            result: $Utils.Optional<QuesCountAggregateOutputType> | number
          }
        }
      }
      rooms: {
        payload: Prisma.$roomsPayload<ExtArgs>
        fields: Prisma.roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findFirst: {
            args: Prisma.roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findMany: {
            args: Prisma.roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          create: {
            args: Prisma.roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          createMany: {
            args: Prisma.roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          delete: {
            args: Prisma.roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          update: {
            args: Prisma.roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          deleteMany: {
            args: Prisma.roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          upsert: {
            args: Prisma.roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      staff_rooms: {
        payload: Prisma.$staff_roomsPayload<ExtArgs>
        fields: Prisma.staff_roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staff_roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staff_roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>
          }
          findFirst: {
            args: Prisma.staff_roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staff_roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>
          }
          findMany: {
            args: Prisma.staff_roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>[]
          }
          create: {
            args: Prisma.staff_roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>
          }
          createMany: {
            args: Prisma.staff_roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staff_roomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>[]
          }
          delete: {
            args: Prisma.staff_roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>
          }
          update: {
            args: Prisma.staff_roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>
          }
          deleteMany: {
            args: Prisma.staff_roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staff_roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staff_roomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>[]
          }
          upsert: {
            args: Prisma.staff_roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staff_roomsPayload>
          }
          aggregate: {
            args: Prisma.Staff_roomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff_rooms>
          }
          groupBy: {
            args: Prisma.staff_roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Staff_roomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.staff_roomsCountArgs<ExtArgs>
            result: $Utils.Optional<Staff_roomsCountAggregateOutputType> | number
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
    patients?: patientsOmit
    ques?: quesOmit
    rooms?: roomsOmit
    staff?: staffOmit
    staff_rooms?: staff_roomsOmit
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
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    ques: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ques?: boolean | PatientsCountOutputTypeCountQuesArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountQuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quesWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    ques: number
    staff_rooms: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ques?: boolean | RoomsCountOutputTypeCountQuesArgs
    staff_rooms?: boolean | RoomsCountOutputTypeCountStaff_roomsArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountQuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quesWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountStaff_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staff_roomsWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    patients: number
    ques: number
    staff_rooms: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | StaffCountOutputTypeCountPatientsArgs
    ques?: boolean | StaffCountOutputTypeCountQuesArgs
    staff_rooms?: boolean | StaffCountOutputTypeCountStaff_roomsArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientsWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountQuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quesWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountStaff_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staff_roomsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsAvgAggregateOutputType = {
    id: number | null
    dr_id: number | null
  }

  export type PatientsSumAggregateOutputType = {
    id: number | null
    dr_id: number | null
  }

  export type PatientsMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    address: string | null
    contact_number: string | null
    email_address: string | null
    image: Uint8Array | null
    chronic_diagnosis: string | null
    dr_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientsMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    address: string | null
    contact_number: string | null
    email_address: string | null
    image: Uint8Array | null
    chronic_diagnosis: string | null
    dr_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientsCountAggregateOutputType = {
    id: number
    full_name: number
    address: number
    contact_number: number
    email_address: number
    image: number
    chronic_diagnosis: number
    dr_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PatientsAvgAggregateInputType = {
    id?: true
    dr_id?: true
  }

  export type PatientsSumAggregateInputType = {
    id?: true
    dr_id?: true
  }

  export type PatientsMinAggregateInputType = {
    id?: true
    full_name?: true
    address?: true
    contact_number?: true
    email_address?: true
    image?: true
    chronic_diagnosis?: true
    dr_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientsMaxAggregateInputType = {
    id?: true
    full_name?: true
    address?: true
    contact_number?: true
    email_address?: true
    image?: true
    chronic_diagnosis?: true
    dr_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientsCountAggregateInputType = {
    id?: true
    full_name?: true
    address?: true
    contact_number?: true
    email_address?: true
    image?: true
    chronic_diagnosis?: true
    dr_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to aggregate.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type patientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientsWhereInput
    orderBy?: patientsOrderByWithAggregationInput | patientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: patientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _avg?: PatientsAvgAggregateInputType
    _sum?: PatientsSumAggregateInputType
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    id: number
    full_name: string
    address: string | null
    contact_number: string | null
    email_address: string | null
    image: Uint8Array | null
    chronic_diagnosis: string | null
    dr_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends patientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type patientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    address?: boolean
    contact_number?: boolean
    email_address?: boolean
    image?: boolean
    chronic_diagnosis?: boolean
    dr_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    staff?: boolean | patients$staffArgs<ExtArgs>
    ques?: boolean | patients$quesArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    address?: boolean
    contact_number?: boolean
    email_address?: boolean
    image?: boolean
    chronic_diagnosis?: boolean
    dr_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    staff?: boolean | patients$staffArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    address?: boolean
    contact_number?: boolean
    email_address?: boolean
    image?: boolean
    chronic_diagnosis?: boolean
    dr_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    staff?: boolean | patients$staffArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectScalar = {
    id?: boolean
    full_name?: boolean
    address?: boolean
    contact_number?: boolean
    email_address?: boolean
    image?: boolean
    chronic_diagnosis?: boolean
    dr_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type patientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "address" | "contact_number" | "email_address" | "image" | "chronic_diagnosis" | "dr_id" | "created_at" | "updated_at", ExtArgs["result"]["patients"]>
  export type patientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | patients$staffArgs<ExtArgs>
    ques?: boolean | patients$quesArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | patients$staffArgs<ExtArgs>
  }
  export type patientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | patients$staffArgs<ExtArgs>
  }

  export type $patientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patients"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs> | null
      ques: Prisma.$quesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      address: string | null
      contact_number: string | null
      email_address: string | null
      image: Uint8Array | null
      chronic_diagnosis: string | null
      dr_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type patientsGetPayload<S extends boolean | null | undefined | patientsDefaultArgs> = $Result.GetResult<Prisma.$patientsPayload, S>

  type patientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface patientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patients'], meta: { name: 'patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {patientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientsFindUniqueArgs>(args: SelectSubset<T, patientsFindUniqueArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientsFindUniqueOrThrowArgs>(args: SelectSubset<T, patientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientsFindFirstArgs>(args?: SelectSubset<T, patientsFindFirstArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientsFindFirstOrThrowArgs>(args?: SelectSubset<T, patientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientsWithIdOnly = await prisma.patients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientsFindManyArgs>(args?: SelectSubset<T, patientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {patientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends patientsCreateArgs>(args: SelectSubset<T, patientsCreateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientsCreateManyArgs>(args?: SelectSubset<T, patientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientsWithIdOnly = await prisma.patients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientsCreateManyAndReturnArgs>(args?: SelectSubset<T, patientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {patientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends patientsDeleteArgs>(args: SelectSubset<T, patientsDeleteArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {patientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientsUpdateArgs>(args: SelectSubset<T, patientsUpdateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientsDeleteManyArgs>(args?: SelectSubset<T, patientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientsUpdateManyArgs>(args: SelectSubset<T, patientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientsWithIdOnly = await prisma.patients.updateManyAndReturn({
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
    updateManyAndReturn<T extends patientsUpdateManyAndReturnArgs>(args: SelectSubset<T, patientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {patientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends patientsUpsertArgs>(args: SelectSubset<T, patientsUpsertArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientsCountArgs>(
      args?: Subset<T, patientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsGroupByArgs} args - Group by arguments.
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
      T extends patientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientsGroupByArgs['orderBy'] }
        : { orderBy?: patientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, patientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patients model
   */
  readonly fields: patientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends patients$staffArgs<ExtArgs> = {}>(args?: Subset<T, patients$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ques<T extends patients$quesArgs<ExtArgs> = {}>(args?: Subset<T, patients$quesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the patients model
   */
  interface patientsFieldRefs {
    readonly id: FieldRef<"patients", 'Int'>
    readonly full_name: FieldRef<"patients", 'String'>
    readonly address: FieldRef<"patients", 'String'>
    readonly contact_number: FieldRef<"patients", 'String'>
    readonly email_address: FieldRef<"patients", 'String'>
    readonly image: FieldRef<"patients", 'Bytes'>
    readonly chronic_diagnosis: FieldRef<"patients", 'String'>
    readonly dr_id: FieldRef<"patients", 'Int'>
    readonly created_at: FieldRef<"patients", 'DateTime'>
    readonly updated_at: FieldRef<"patients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patients findUnique
   */
  export type patientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findUniqueOrThrow
   */
  export type patientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findFirst
   */
  export type patientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findFirstOrThrow
   */
  export type patientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findMany
   */
  export type patientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients create
   */
  export type patientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to create a patients.
     */
    data: XOR<patientsCreateInput, patientsUncheckedCreateInput>
  }

  /**
   * patients createMany
   */
  export type patientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patients createManyAndReturn
   */
  export type patientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * patients update
   */
  export type patientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to update a patients.
     */
    data: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
    /**
     * Choose, which patients to update.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients updateMany
   */
  export type patientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patients updateManyAndReturn
   */
  export type patientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * patients upsert
   */
  export type patientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The filter to search for the patients to update in case it exists.
     */
    where: patientsWhereUniqueInput
    /**
     * In case the patients found by the `where` argument doesn't exist, create a new patients with this data.
     */
    create: XOR<patientsCreateInput, patientsUncheckedCreateInput>
    /**
     * In case the patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
  }

  /**
   * patients delete
   */
  export type patientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter which patients to delete.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients deleteMany
   */
  export type patientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patients.staff
   */
  export type patients$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * patients.ques
   */
  export type patients$quesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    where?: quesWhereInput
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    cursor?: quesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuesScalarFieldEnum | QuesScalarFieldEnum[]
  }

  /**
   * patients without action
   */
  export type patientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
  }


  /**
   * Model ques
   */

  export type AggregateQues = {
    _count: QuesCountAggregateOutputType | null
    _avg: QuesAvgAggregateOutputType | null
    _sum: QuesSumAggregateOutputType | null
    _min: QuesMinAggregateOutputType | null
    _max: QuesMaxAggregateOutputType | null
  }

  export type QuesAvgAggregateOutputType = {
    id: number | null
    patient_id: number | null
    staff_id: number | null
    room_id: number | null
    queue_number: number | null
  }

  export type QuesSumAggregateOutputType = {
    id: number | null
    patient_id: number | null
    staff_id: number | null
    room_id: number | null
    queue_number: number | null
  }

  export type QuesMinAggregateOutputType = {
    id: number | null
    patient_id: number | null
    staff_id: number | null
    room_id: number | null
    queue_number: number | null
    status: $Enums.que_status | null
    sign_in_time: Date | null
    started_time: Date | null
    completed_time: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuesMaxAggregateOutputType = {
    id: number | null
    patient_id: number | null
    staff_id: number | null
    room_id: number | null
    queue_number: number | null
    status: $Enums.que_status | null
    sign_in_time: Date | null
    started_time: Date | null
    completed_time: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuesCountAggregateOutputType = {
    id: number
    patient_id: number
    staff_id: number
    room_id: number
    queue_number: number
    status: number
    sign_in_time: number
    started_time: number
    completed_time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuesAvgAggregateInputType = {
    id?: true
    patient_id?: true
    staff_id?: true
    room_id?: true
    queue_number?: true
  }

  export type QuesSumAggregateInputType = {
    id?: true
    patient_id?: true
    staff_id?: true
    room_id?: true
    queue_number?: true
  }

  export type QuesMinAggregateInputType = {
    id?: true
    patient_id?: true
    staff_id?: true
    room_id?: true
    queue_number?: true
    status?: true
    sign_in_time?: true
    started_time?: true
    completed_time?: true
    created_at?: true
    updated_at?: true
  }

  export type QuesMaxAggregateInputType = {
    id?: true
    patient_id?: true
    staff_id?: true
    room_id?: true
    queue_number?: true
    status?: true
    sign_in_time?: true
    started_time?: true
    completed_time?: true
    created_at?: true
    updated_at?: true
  }

  export type QuesCountAggregateInputType = {
    id?: true
    patient_id?: true
    staff_id?: true
    room_id?: true
    queue_number?: true
    status?: true
    sign_in_time?: true
    started_time?: true
    completed_time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ques to aggregate.
     */
    where?: quesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ques to fetch.
     */
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ques
    **/
    _count?: true | QuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuesMaxAggregateInputType
  }

  export type GetQuesAggregateType<T extends QuesAggregateArgs> = {
        [P in keyof T & keyof AggregateQues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQues[P]>
      : GetScalarType<T[P], AggregateQues[P]>
  }




  export type quesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quesWhereInput
    orderBy?: quesOrderByWithAggregationInput | quesOrderByWithAggregationInput[]
    by: QuesScalarFieldEnum[] | QuesScalarFieldEnum
    having?: quesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuesCountAggregateInputType | true
    _avg?: QuesAvgAggregateInputType
    _sum?: QuesSumAggregateInputType
    _min?: QuesMinAggregateInputType
    _max?: QuesMaxAggregateInputType
  }

  export type QuesGroupByOutputType = {
    id: number
    patient_id: number
    staff_id: number
    room_id: number
    queue_number: number
    status: $Enums.que_status | null
    sign_in_time: Date | null
    started_time: Date | null
    completed_time: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: QuesCountAggregateOutputType | null
    _avg: QuesAvgAggregateOutputType | null
    _sum: QuesSumAggregateOutputType | null
    _min: QuesMinAggregateOutputType | null
    _max: QuesMaxAggregateOutputType | null
  }

  type GetQuesGroupByPayload<T extends quesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuesGroupByOutputType[P]>
            : GetScalarType<T[P], QuesGroupByOutputType[P]>
        }
      >
    >


  export type quesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    staff_id?: boolean
    room_id?: boolean
    queue_number?: boolean
    status?: boolean
    sign_in_time?: boolean
    started_time?: boolean
    completed_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ques"]>

  export type quesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    staff_id?: boolean
    room_id?: boolean
    queue_number?: boolean
    status?: boolean
    sign_in_time?: boolean
    started_time?: boolean
    completed_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ques"]>

  export type quesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    staff_id?: boolean
    room_id?: boolean
    queue_number?: boolean
    status?: boolean
    sign_in_time?: boolean
    started_time?: boolean
    completed_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ques"]>

  export type quesSelectScalar = {
    id?: boolean
    patient_id?: boolean
    staff_id?: boolean
    room_id?: boolean
    queue_number?: boolean
    status?: boolean
    sign_in_time?: boolean
    started_time?: boolean
    completed_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type quesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "staff_id" | "room_id" | "queue_number" | "status" | "sign_in_time" | "started_time" | "completed_time" | "created_at" | "updated_at", ExtArgs["result"]["ques"]>
  export type quesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type quesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type quesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $quesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ques"
    objects: {
      patients: Prisma.$patientsPayload<ExtArgs>
      rooms: Prisma.$roomsPayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patient_id: number
      staff_id: number
      room_id: number
      queue_number: number
      status: $Enums.que_status | null
      sign_in_time: Date | null
      started_time: Date | null
      completed_time: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["ques"]>
    composites: {}
  }

  type quesGetPayload<S extends boolean | null | undefined | quesDefaultArgs> = $Result.GetResult<Prisma.$quesPayload, S>

  type quesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<quesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuesCountAggregateInputType | true
    }

  export interface quesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ques'], meta: { name: 'ques' } }
    /**
     * Find zero or one Ques that matches the filter.
     * @param {quesFindUniqueArgs} args - Arguments to find a Ques
     * @example
     * // Get one Ques
     * const ques = await prisma.ques.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends quesFindUniqueArgs>(args: SelectSubset<T, quesFindUniqueArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ques that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {quesFindUniqueOrThrowArgs} args - Arguments to find a Ques
     * @example
     * // Get one Ques
     * const ques = await prisma.ques.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends quesFindUniqueOrThrowArgs>(args: SelectSubset<T, quesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quesFindFirstArgs} args - Arguments to find a Ques
     * @example
     * // Get one Ques
     * const ques = await prisma.ques.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends quesFindFirstArgs>(args?: SelectSubset<T, quesFindFirstArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ques that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quesFindFirstOrThrowArgs} args - Arguments to find a Ques
     * @example
     * // Get one Ques
     * const ques = await prisma.ques.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends quesFindFirstOrThrowArgs>(args?: SelectSubset<T, quesFindFirstOrThrowArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ques
     * const ques = await prisma.ques.findMany()
     * 
     * // Get first 10 Ques
     * const ques = await prisma.ques.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quesWithIdOnly = await prisma.ques.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends quesFindManyArgs>(args?: SelectSubset<T, quesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ques.
     * @param {quesCreateArgs} args - Arguments to create a Ques.
     * @example
     * // Create one Ques
     * const Ques = await prisma.ques.create({
     *   data: {
     *     // ... data to create a Ques
     *   }
     * })
     * 
     */
    create<T extends quesCreateArgs>(args: SelectSubset<T, quesCreateArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ques.
     * @param {quesCreateManyArgs} args - Arguments to create many Ques.
     * @example
     * // Create many Ques
     * const ques = await prisma.ques.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends quesCreateManyArgs>(args?: SelectSubset<T, quesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ques and returns the data saved in the database.
     * @param {quesCreateManyAndReturnArgs} args - Arguments to create many Ques.
     * @example
     * // Create many Ques
     * const ques = await prisma.ques.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ques and only return the `id`
     * const quesWithIdOnly = await prisma.ques.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends quesCreateManyAndReturnArgs>(args?: SelectSubset<T, quesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ques.
     * @param {quesDeleteArgs} args - Arguments to delete one Ques.
     * @example
     * // Delete one Ques
     * const Ques = await prisma.ques.delete({
     *   where: {
     *     // ... filter to delete one Ques
     *   }
     * })
     * 
     */
    delete<T extends quesDeleteArgs>(args: SelectSubset<T, quesDeleteArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ques.
     * @param {quesUpdateArgs} args - Arguments to update one Ques.
     * @example
     * // Update one Ques
     * const ques = await prisma.ques.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends quesUpdateArgs>(args: SelectSubset<T, quesUpdateArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ques.
     * @param {quesDeleteManyArgs} args - Arguments to filter Ques to delete.
     * @example
     * // Delete a few Ques
     * const { count } = await prisma.ques.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends quesDeleteManyArgs>(args?: SelectSubset<T, quesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ques
     * const ques = await prisma.ques.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends quesUpdateManyArgs>(args: SelectSubset<T, quesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ques and returns the data updated in the database.
     * @param {quesUpdateManyAndReturnArgs} args - Arguments to update many Ques.
     * @example
     * // Update many Ques
     * const ques = await prisma.ques.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ques and only return the `id`
     * const quesWithIdOnly = await prisma.ques.updateManyAndReturn({
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
    updateManyAndReturn<T extends quesUpdateManyAndReturnArgs>(args: SelectSubset<T, quesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ques.
     * @param {quesUpsertArgs} args - Arguments to update or create a Ques.
     * @example
     * // Update or create a Ques
     * const ques = await prisma.ques.upsert({
     *   create: {
     *     // ... data to create a Ques
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ques we want to update
     *   }
     * })
     */
    upsert<T extends quesUpsertArgs>(args: SelectSubset<T, quesUpsertArgs<ExtArgs>>): Prisma__quesClient<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quesCountArgs} args - Arguments to filter Ques to count.
     * @example
     * // Count the number of Ques
     * const count = await prisma.ques.count({
     *   where: {
     *     // ... the filter for the Ques we want to count
     *   }
     * })
    **/
    count<T extends quesCountArgs>(
      args?: Subset<T, quesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuesAggregateArgs>(args: Subset<T, QuesAggregateArgs>): Prisma.PrismaPromise<GetQuesAggregateType<T>>

    /**
     * Group by Ques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quesGroupByArgs} args - Group by arguments.
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
      T extends quesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quesGroupByArgs['orderBy'] }
        : { orderBy?: quesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ques model
   */
  readonly fields: quesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ques.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends patientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientsDefaultArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ques model
   */
  interface quesFieldRefs {
    readonly id: FieldRef<"ques", 'Int'>
    readonly patient_id: FieldRef<"ques", 'Int'>
    readonly staff_id: FieldRef<"ques", 'Int'>
    readonly room_id: FieldRef<"ques", 'Int'>
    readonly queue_number: FieldRef<"ques", 'Int'>
    readonly status: FieldRef<"ques", 'que_status'>
    readonly sign_in_time: FieldRef<"ques", 'DateTime'>
    readonly started_time: FieldRef<"ques", 'DateTime'>
    readonly completed_time: FieldRef<"ques", 'DateTime'>
    readonly created_at: FieldRef<"ques", 'DateTime'>
    readonly updated_at: FieldRef<"ques", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ques findUnique
   */
  export type quesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * Filter, which ques to fetch.
     */
    where: quesWhereUniqueInput
  }

  /**
   * ques findUniqueOrThrow
   */
  export type quesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * Filter, which ques to fetch.
     */
    where: quesWhereUniqueInput
  }

  /**
   * ques findFirst
   */
  export type quesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * Filter, which ques to fetch.
     */
    where?: quesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ques to fetch.
     */
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ques.
     */
    cursor?: quesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ques.
     */
    distinct?: QuesScalarFieldEnum | QuesScalarFieldEnum[]
  }

  /**
   * ques findFirstOrThrow
   */
  export type quesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * Filter, which ques to fetch.
     */
    where?: quesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ques to fetch.
     */
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ques.
     */
    cursor?: quesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ques.
     */
    distinct?: QuesScalarFieldEnum | QuesScalarFieldEnum[]
  }

  /**
   * ques findMany
   */
  export type quesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * Filter, which ques to fetch.
     */
    where?: quesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ques to fetch.
     */
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ques.
     */
    cursor?: quesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ques.
     */
    skip?: number
    distinct?: QuesScalarFieldEnum | QuesScalarFieldEnum[]
  }

  /**
   * ques create
   */
  export type quesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * The data needed to create a ques.
     */
    data: XOR<quesCreateInput, quesUncheckedCreateInput>
  }

  /**
   * ques createMany
   */
  export type quesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ques.
     */
    data: quesCreateManyInput | quesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ques createManyAndReturn
   */
  export type quesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * The data used to create many ques.
     */
    data: quesCreateManyInput | quesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ques update
   */
  export type quesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * The data needed to update a ques.
     */
    data: XOR<quesUpdateInput, quesUncheckedUpdateInput>
    /**
     * Choose, which ques to update.
     */
    where: quesWhereUniqueInput
  }

  /**
   * ques updateMany
   */
  export type quesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ques.
     */
    data: XOR<quesUpdateManyMutationInput, quesUncheckedUpdateManyInput>
    /**
     * Filter which ques to update
     */
    where?: quesWhereInput
    /**
     * Limit how many ques to update.
     */
    limit?: number
  }

  /**
   * ques updateManyAndReturn
   */
  export type quesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * The data used to update ques.
     */
    data: XOR<quesUpdateManyMutationInput, quesUncheckedUpdateManyInput>
    /**
     * Filter which ques to update
     */
    where?: quesWhereInput
    /**
     * Limit how many ques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ques upsert
   */
  export type quesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * The filter to search for the ques to update in case it exists.
     */
    where: quesWhereUniqueInput
    /**
     * In case the ques found by the `where` argument doesn't exist, create a new ques with this data.
     */
    create: XOR<quesCreateInput, quesUncheckedCreateInput>
    /**
     * In case the ques was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quesUpdateInput, quesUncheckedUpdateInput>
  }

  /**
   * ques delete
   */
  export type quesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    /**
     * Filter which ques to delete.
     */
    where: quesWhereUniqueInput
  }

  /**
   * ques deleteMany
   */
  export type quesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ques to delete
     */
    where?: quesWhereInput
    /**
     * Limit how many ques to delete.
     */
    limit?: number
  }

  /**
   * ques without action
   */
  export type quesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
  }


  /**
   * Model rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomsSumAggregateOutputType = {
    id: number | null
  }

  export type RoomsMinAggregateOutputType = {
    id: number | null
    room_number: string | null
    room_name: string | null
    room_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: number | null
    room_number: string | null
    room_name: string | null
    room_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    room_number: number
    room_name: number
    room_type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    id?: true
  }

  export type RoomsSumAggregateInputType = {
    id?: true
  }

  export type RoomsMinAggregateInputType = {
    id?: true
    room_number?: true
    room_name?: true
    room_type?: true
    created_at?: true
    updated_at?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    room_number?: true
    room_name?: true
    room_type?: true
    created_at?: true
    updated_at?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    room_number?: true
    room_name?: true
    room_type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to aggregate.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomsWhereInput
    orderBy?: roomsOrderByWithAggregationInput | roomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: number
    room_number: string
    room_name: string | null
    room_type: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_number?: boolean
    room_name?: boolean
    room_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    ques?: boolean | rooms$quesArgs<ExtArgs>
    staff_rooms?: boolean | rooms$staff_roomsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_number?: boolean
    room_name?: boolean
    room_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_number?: boolean
    room_name?: boolean
    room_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectScalar = {
    id?: boolean
    room_number?: boolean
    room_name?: boolean
    room_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_number" | "room_name" | "room_type" | "created_at" | "updated_at", ExtArgs["result"]["rooms"]>
  export type roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ques?: boolean | rooms$quesArgs<ExtArgs>
    staff_rooms?: boolean | rooms$staff_roomsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rooms"
    objects: {
      ques: Prisma.$quesPayload<ExtArgs>[]
      staff_rooms: Prisma.$staff_roomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      room_number: string
      room_name: string | null
      room_type: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type roomsGetPayload<S extends boolean | null | undefined | roomsDefaultArgs> = $Result.GetResult<Prisma.$roomsPayload, S>

  type roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rooms'], meta: { name: 'rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {roomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomsFindUniqueArgs>(args: SelectSubset<T, roomsFindUniqueArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomsFindFirstArgs>(args?: SelectSubset<T, roomsFindFirstArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomsFindManyArgs>(args?: SelectSubset<T, roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {roomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends roomsCreateArgs>(args: SelectSubset<T, roomsCreateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomsCreateManyArgs>(args?: SelectSubset<T, roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {roomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roomsCreateManyAndReturnArgs>(args?: SelectSubset<T, roomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rooms.
     * @param {roomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends roomsDeleteArgs>(args: SelectSubset<T, roomsDeleteArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {roomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomsUpdateArgs>(args: SelectSubset<T, roomsUpdateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomsDeleteManyArgs>(args?: SelectSubset<T, roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomsUpdateManyArgs>(args: SelectSubset<T, roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {roomsUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.updateManyAndReturn({
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
    updateManyAndReturn<T extends roomsUpdateManyAndReturnArgs>(args: SelectSubset<T, roomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rooms.
     * @param {roomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends roomsUpsertArgs>(args: SelectSubset<T, roomsUpsertArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomsCountArgs>(
      args?: Subset<T, roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsGroupByArgs} args - Group by arguments.
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
      T extends roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomsGroupByArgs['orderBy'] }
        : { orderBy?: roomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rooms model
   */
  readonly fields: roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ques<T extends rooms$quesArgs<ExtArgs> = {}>(args?: Subset<T, rooms$quesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff_rooms<T extends rooms$staff_roomsArgs<ExtArgs> = {}>(args?: Subset<T, rooms$staff_roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the rooms model
   */
  interface roomsFieldRefs {
    readonly id: FieldRef<"rooms", 'Int'>
    readonly room_number: FieldRef<"rooms", 'String'>
    readonly room_name: FieldRef<"rooms", 'String'>
    readonly room_type: FieldRef<"rooms", 'String'>
    readonly created_at: FieldRef<"rooms", 'DateTime'>
    readonly updated_at: FieldRef<"rooms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rooms findUnique
   */
  export type roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findUniqueOrThrow
   */
  export type roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findFirst
   */
  export type roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findFirstOrThrow
   */
  export type roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findMany
   */
  export type roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms create
   */
  export type roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a rooms.
     */
    data: XOR<roomsCreateInput, roomsUncheckedCreateInput>
  }

  /**
   * rooms createMany
   */
  export type roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms createManyAndReturn
   */
  export type roomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms update
   */
  export type roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a rooms.
     */
    data: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
    /**
     * Choose, which rooms to update.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms updateMany
   */
  export type roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms updateManyAndReturn
   */
  export type roomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms upsert
   */
  export type roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the rooms to update in case it exists.
     */
    where: roomsWhereUniqueInput
    /**
     * In case the rooms found by the `where` argument doesn't exist, create a new rooms with this data.
     */
    create: XOR<roomsCreateInput, roomsUncheckedCreateInput>
    /**
     * In case the rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
  }

  /**
   * rooms delete
   */
  export type roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter which rooms to delete.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms deleteMany
   */
  export type roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * rooms.ques
   */
  export type rooms$quesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    where?: quesWhereInput
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    cursor?: quesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuesScalarFieldEnum | QuesScalarFieldEnum[]
  }

  /**
   * rooms.staff_rooms
   */
  export type rooms$staff_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    where?: staff_roomsWhereInput
    orderBy?: staff_roomsOrderByWithRelationInput | staff_roomsOrderByWithRelationInput[]
    cursor?: staff_roomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Staff_roomsScalarFieldEnum | Staff_roomsScalarFieldEnum[]
  }

  /**
   * rooms without action
   */
  export type roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    years_of_service: number | null
    monthly_wages: Decimal | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    years_of_service: number | null
    monthly_wages: Decimal | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    position: $Enums.staff_position | null
    image: Uint8Array | null
    years_of_service: number | null
    monthly_wages: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    position: $Enums.staff_position | null
    image: Uint8Array | null
    years_of_service: number | null
    monthly_wages: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    full_name: number
    position: number
    image: number
    years_of_service: number
    monthly_wages: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    years_of_service?: true
    monthly_wages?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    years_of_service?: true
    monthly_wages?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    full_name?: true
    position?: true
    image?: true
    years_of_service?: true
    monthly_wages?: true
    created_at?: true
    updated_at?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    full_name?: true
    position?: true
    image?: true
    years_of_service?: true
    monthly_wages?: true
    created_at?: true
    updated_at?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    full_name?: true
    position?: true
    image?: true
    years_of_service?: true
    monthly_wages?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    full_name: string
    position: $Enums.staff_position
    image: Uint8Array | null
    years_of_service: number | null
    monthly_wages: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    position?: boolean
    image?: boolean
    years_of_service?: boolean
    monthly_wages?: boolean
    created_at?: boolean
    updated_at?: boolean
    patients?: boolean | staff$patientsArgs<ExtArgs>
    ques?: boolean | staff$quesArgs<ExtArgs>
    staff_rooms?: boolean | staff$staff_roomsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    position?: boolean
    image?: boolean
    years_of_service?: boolean
    monthly_wages?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["staff"]>

  export type staffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    position?: boolean
    image?: boolean
    years_of_service?: boolean
    monthly_wages?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["staff"]>

  export type staffSelectScalar = {
    id?: boolean
    full_name?: boolean
    position?: boolean
    image?: boolean
    years_of_service?: boolean
    monthly_wages?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "position" | "image" | "years_of_service" | "monthly_wages" | "created_at" | "updated_at", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | staff$patientsArgs<ExtArgs>
    ques?: boolean | staff$quesArgs<ExtArgs>
    staff_rooms?: boolean | staff$staff_roomsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type staffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type staffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      patients: Prisma.$patientsPayload<ExtArgs>[]
      ques: Prisma.$quesPayload<ExtArgs>[]
      staff_rooms: Prisma.$staff_roomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      position: $Enums.staff_position
      image: Uint8Array | null
      years_of_service: number | null
      monthly_wages: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {staffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffCreateManyAndReturnArgs>(args?: SelectSubset<T, staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {staffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
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
    updateManyAndReturn<T extends staffUpdateManyAndReturnArgs>(args: SelectSubset<T, staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
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
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends staff$patientsArgs<ExtArgs> = {}>(args?: Subset<T, staff$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ques<T extends staff$quesArgs<ExtArgs> = {}>(args?: Subset<T, staff$quesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff_rooms<T extends staff$staff_roomsArgs<ExtArgs> = {}>(args?: Subset<T, staff$staff_roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly id: FieldRef<"staff", 'Int'>
    readonly full_name: FieldRef<"staff", 'String'>
    readonly position: FieldRef<"staff", 'staff_position'>
    readonly image: FieldRef<"staff", 'Bytes'>
    readonly years_of_service: FieldRef<"staff", 'Int'>
    readonly monthly_wages: FieldRef<"staff", 'Decimal'>
    readonly created_at: FieldRef<"staff", 'DateTime'>
    readonly updated_at: FieldRef<"staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff createManyAndReturn
   */
  export type staffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff updateManyAndReturn
   */
  export type staffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.patients
   */
  export type staff$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    where?: patientsWhereInput
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    cursor?: patientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * staff.ques
   */
  export type staff$quesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ques
     */
    select?: quesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ques
     */
    omit?: quesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quesInclude<ExtArgs> | null
    where?: quesWhereInput
    orderBy?: quesOrderByWithRelationInput | quesOrderByWithRelationInput[]
    cursor?: quesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuesScalarFieldEnum | QuesScalarFieldEnum[]
  }

  /**
   * staff.staff_rooms
   */
  export type staff$staff_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    where?: staff_roomsWhereInput
    orderBy?: staff_roomsOrderByWithRelationInput | staff_roomsOrderByWithRelationInput[]
    cursor?: staff_roomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Staff_roomsScalarFieldEnum | Staff_roomsScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model staff_rooms
   */

  export type AggregateStaff_rooms = {
    _count: Staff_roomsCountAggregateOutputType | null
    _avg: Staff_roomsAvgAggregateOutputType | null
    _sum: Staff_roomsSumAggregateOutputType | null
    _min: Staff_roomsMinAggregateOutputType | null
    _max: Staff_roomsMaxAggregateOutputType | null
  }

  export type Staff_roomsAvgAggregateOutputType = {
    id: number | null
    staff_id: number | null
    room_id: number | null
  }

  export type Staff_roomsSumAggregateOutputType = {
    id: number | null
    staff_id: number | null
    room_id: number | null
  }

  export type Staff_roomsMinAggregateOutputType = {
    id: number | null
    staff_id: number | null
    room_id: number | null
    sign_in_date: Date | null
    sign_in_time: Date | null
    sign_out_time: Date | null
  }

  export type Staff_roomsMaxAggregateOutputType = {
    id: number | null
    staff_id: number | null
    room_id: number | null
    sign_in_date: Date | null
    sign_in_time: Date | null
    sign_out_time: Date | null
  }

  export type Staff_roomsCountAggregateOutputType = {
    id: number
    staff_id: number
    room_id: number
    sign_in_date: number
    sign_in_time: number
    sign_out_time: number
    _all: number
  }


  export type Staff_roomsAvgAggregateInputType = {
    id?: true
    staff_id?: true
    room_id?: true
  }

  export type Staff_roomsSumAggregateInputType = {
    id?: true
    staff_id?: true
    room_id?: true
  }

  export type Staff_roomsMinAggregateInputType = {
    id?: true
    staff_id?: true
    room_id?: true
    sign_in_date?: true
    sign_in_time?: true
    sign_out_time?: true
  }

  export type Staff_roomsMaxAggregateInputType = {
    id?: true
    staff_id?: true
    room_id?: true
    sign_in_date?: true
    sign_in_time?: true
    sign_out_time?: true
  }

  export type Staff_roomsCountAggregateInputType = {
    id?: true
    staff_id?: true
    room_id?: true
    sign_in_date?: true
    sign_in_time?: true
    sign_out_time?: true
    _all?: true
  }

  export type Staff_roomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_rooms to aggregate.
     */
    where?: staff_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff_rooms to fetch.
     */
    orderBy?: staff_roomsOrderByWithRelationInput | staff_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staff_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff_rooms
    **/
    _count?: true | Staff_roomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Staff_roomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Staff_roomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Staff_roomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Staff_roomsMaxAggregateInputType
  }

  export type GetStaff_roomsAggregateType<T extends Staff_roomsAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff_rooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff_rooms[P]>
      : GetScalarType<T[P], AggregateStaff_rooms[P]>
  }




  export type staff_roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staff_roomsWhereInput
    orderBy?: staff_roomsOrderByWithAggregationInput | staff_roomsOrderByWithAggregationInput[]
    by: Staff_roomsScalarFieldEnum[] | Staff_roomsScalarFieldEnum
    having?: staff_roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Staff_roomsCountAggregateInputType | true
    _avg?: Staff_roomsAvgAggregateInputType
    _sum?: Staff_roomsSumAggregateInputType
    _min?: Staff_roomsMinAggregateInputType
    _max?: Staff_roomsMaxAggregateInputType
  }

  export type Staff_roomsGroupByOutputType = {
    id: number
    staff_id: number
    room_id: number
    sign_in_date: Date
    sign_in_time: Date | null
    sign_out_time: Date | null
    _count: Staff_roomsCountAggregateOutputType | null
    _avg: Staff_roomsAvgAggregateOutputType | null
    _sum: Staff_roomsSumAggregateOutputType | null
    _min: Staff_roomsMinAggregateOutputType | null
    _max: Staff_roomsMaxAggregateOutputType | null
  }

  type GetStaff_roomsGroupByPayload<T extends staff_roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Staff_roomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Staff_roomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Staff_roomsGroupByOutputType[P]>
            : GetScalarType<T[P], Staff_roomsGroupByOutputType[P]>
        }
      >
    >


  export type staff_roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    room_id?: boolean
    sign_in_date?: boolean
    sign_in_time?: boolean
    sign_out_time?: boolean
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff_rooms"]>

  export type staff_roomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    room_id?: boolean
    sign_in_date?: boolean
    sign_in_time?: boolean
    sign_out_time?: boolean
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff_rooms"]>

  export type staff_roomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    room_id?: boolean
    sign_in_date?: boolean
    sign_in_time?: boolean
    sign_out_time?: boolean
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff_rooms"]>

  export type staff_roomsSelectScalar = {
    id?: boolean
    staff_id?: boolean
    room_id?: boolean
    sign_in_date?: boolean
    sign_in_time?: boolean
    sign_out_time?: boolean
  }

  export type staff_roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staff_id" | "room_id" | "sign_in_date" | "sign_in_time" | "sign_out_time", ExtArgs["result"]["staff_rooms"]>
  export type staff_roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type staff_roomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type staff_roomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $staff_roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff_rooms"
    objects: {
      rooms: Prisma.$roomsPayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      staff_id: number
      room_id: number
      sign_in_date: Date
      sign_in_time: Date | null
      sign_out_time: Date | null
    }, ExtArgs["result"]["staff_rooms"]>
    composites: {}
  }

  type staff_roomsGetPayload<S extends boolean | null | undefined | staff_roomsDefaultArgs> = $Result.GetResult<Prisma.$staff_roomsPayload, S>

  type staff_roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staff_roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Staff_roomsCountAggregateInputType | true
    }

  export interface staff_roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff_rooms'], meta: { name: 'staff_rooms' } }
    /**
     * Find zero or one Staff_rooms that matches the filter.
     * @param {staff_roomsFindUniqueArgs} args - Arguments to find a Staff_rooms
     * @example
     * // Get one Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staff_roomsFindUniqueArgs>(args: SelectSubset<T, staff_roomsFindUniqueArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff_rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staff_roomsFindUniqueOrThrowArgs} args - Arguments to find a Staff_rooms
     * @example
     * // Get one Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staff_roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, staff_roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_roomsFindFirstArgs} args - Arguments to find a Staff_rooms
     * @example
     * // Get one Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staff_roomsFindFirstArgs>(args?: SelectSubset<T, staff_roomsFindFirstArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff_rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_roomsFindFirstOrThrowArgs} args - Arguments to find a Staff_rooms
     * @example
     * // Get one Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staff_roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, staff_roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.findMany()
     * 
     * // Get first 10 Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staff_roomsWithIdOnly = await prisma.staff_rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends staff_roomsFindManyArgs>(args?: SelectSubset<T, staff_roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff_rooms.
     * @param {staff_roomsCreateArgs} args - Arguments to create a Staff_rooms.
     * @example
     * // Create one Staff_rooms
     * const Staff_rooms = await prisma.staff_rooms.create({
     *   data: {
     *     // ... data to create a Staff_rooms
     *   }
     * })
     * 
     */
    create<T extends staff_roomsCreateArgs>(args: SelectSubset<T, staff_roomsCreateArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff_rooms.
     * @param {staff_roomsCreateManyArgs} args - Arguments to create many Staff_rooms.
     * @example
     * // Create many Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staff_roomsCreateManyArgs>(args?: SelectSubset<T, staff_roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff_rooms and returns the data saved in the database.
     * @param {staff_roomsCreateManyAndReturnArgs} args - Arguments to create many Staff_rooms.
     * @example
     * // Create many Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff_rooms and only return the `id`
     * const staff_roomsWithIdOnly = await prisma.staff_rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staff_roomsCreateManyAndReturnArgs>(args?: SelectSubset<T, staff_roomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff_rooms.
     * @param {staff_roomsDeleteArgs} args - Arguments to delete one Staff_rooms.
     * @example
     * // Delete one Staff_rooms
     * const Staff_rooms = await prisma.staff_rooms.delete({
     *   where: {
     *     // ... filter to delete one Staff_rooms
     *   }
     * })
     * 
     */
    delete<T extends staff_roomsDeleteArgs>(args: SelectSubset<T, staff_roomsDeleteArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff_rooms.
     * @param {staff_roomsUpdateArgs} args - Arguments to update one Staff_rooms.
     * @example
     * // Update one Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staff_roomsUpdateArgs>(args: SelectSubset<T, staff_roomsUpdateArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff_rooms.
     * @param {staff_roomsDeleteManyArgs} args - Arguments to filter Staff_rooms to delete.
     * @example
     * // Delete a few Staff_rooms
     * const { count } = await prisma.staff_rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staff_roomsDeleteManyArgs>(args?: SelectSubset<T, staff_roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staff_roomsUpdateManyArgs>(args: SelectSubset<T, staff_roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff_rooms and returns the data updated in the database.
     * @param {staff_roomsUpdateManyAndReturnArgs} args - Arguments to update many Staff_rooms.
     * @example
     * // Update many Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff_rooms and only return the `id`
     * const staff_roomsWithIdOnly = await prisma.staff_rooms.updateManyAndReturn({
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
    updateManyAndReturn<T extends staff_roomsUpdateManyAndReturnArgs>(args: SelectSubset<T, staff_roomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff_rooms.
     * @param {staff_roomsUpsertArgs} args - Arguments to update or create a Staff_rooms.
     * @example
     * // Update or create a Staff_rooms
     * const staff_rooms = await prisma.staff_rooms.upsert({
     *   create: {
     *     // ... data to create a Staff_rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff_rooms we want to update
     *   }
     * })
     */
    upsert<T extends staff_roomsUpsertArgs>(args: SelectSubset<T, staff_roomsUpsertArgs<ExtArgs>>): Prisma__staff_roomsClient<$Result.GetResult<Prisma.$staff_roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_roomsCountArgs} args - Arguments to filter Staff_rooms to count.
     * @example
     * // Count the number of Staff_rooms
     * const count = await prisma.staff_rooms.count({
     *   where: {
     *     // ... the filter for the Staff_rooms we want to count
     *   }
     * })
    **/
    count<T extends staff_roomsCountArgs>(
      args?: Subset<T, staff_roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Staff_roomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_roomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Staff_roomsAggregateArgs>(args: Subset<T, Staff_roomsAggregateArgs>): Prisma.PrismaPromise<GetStaff_roomsAggregateType<T>>

    /**
     * Group by Staff_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_roomsGroupByArgs} args - Group by arguments.
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
      T extends staff_roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staff_roomsGroupByArgs['orderBy'] }
        : { orderBy?: staff_roomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, staff_roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaff_roomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff_rooms model
   */
  readonly fields: staff_roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff_rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staff_roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the staff_rooms model
   */
  interface staff_roomsFieldRefs {
    readonly id: FieldRef<"staff_rooms", 'Int'>
    readonly staff_id: FieldRef<"staff_rooms", 'Int'>
    readonly room_id: FieldRef<"staff_rooms", 'Int'>
    readonly sign_in_date: FieldRef<"staff_rooms", 'DateTime'>
    readonly sign_in_time: FieldRef<"staff_rooms", 'DateTime'>
    readonly sign_out_time: FieldRef<"staff_rooms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * staff_rooms findUnique
   */
  export type staff_roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * Filter, which staff_rooms to fetch.
     */
    where: staff_roomsWhereUniqueInput
  }

  /**
   * staff_rooms findUniqueOrThrow
   */
  export type staff_roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * Filter, which staff_rooms to fetch.
     */
    where: staff_roomsWhereUniqueInput
  }

  /**
   * staff_rooms findFirst
   */
  export type staff_roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * Filter, which staff_rooms to fetch.
     */
    where?: staff_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff_rooms to fetch.
     */
    orderBy?: staff_roomsOrderByWithRelationInput | staff_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff_rooms.
     */
    cursor?: staff_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff_rooms.
     */
    distinct?: Staff_roomsScalarFieldEnum | Staff_roomsScalarFieldEnum[]
  }

  /**
   * staff_rooms findFirstOrThrow
   */
  export type staff_roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * Filter, which staff_rooms to fetch.
     */
    where?: staff_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff_rooms to fetch.
     */
    orderBy?: staff_roomsOrderByWithRelationInput | staff_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff_rooms.
     */
    cursor?: staff_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff_rooms.
     */
    distinct?: Staff_roomsScalarFieldEnum | Staff_roomsScalarFieldEnum[]
  }

  /**
   * staff_rooms findMany
   */
  export type staff_roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * Filter, which staff_rooms to fetch.
     */
    where?: staff_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff_rooms to fetch.
     */
    orderBy?: staff_roomsOrderByWithRelationInput | staff_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff_rooms.
     */
    cursor?: staff_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff_rooms.
     */
    skip?: number
    distinct?: Staff_roomsScalarFieldEnum | Staff_roomsScalarFieldEnum[]
  }

  /**
   * staff_rooms create
   */
  export type staff_roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a staff_rooms.
     */
    data: XOR<staff_roomsCreateInput, staff_roomsUncheckedCreateInput>
  }

  /**
   * staff_rooms createMany
   */
  export type staff_roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff_rooms.
     */
    data: staff_roomsCreateManyInput | staff_roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff_rooms createManyAndReturn
   */
  export type staff_roomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * The data used to create many staff_rooms.
     */
    data: staff_roomsCreateManyInput | staff_roomsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff_rooms update
   */
  export type staff_roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a staff_rooms.
     */
    data: XOR<staff_roomsUpdateInput, staff_roomsUncheckedUpdateInput>
    /**
     * Choose, which staff_rooms to update.
     */
    where: staff_roomsWhereUniqueInput
  }

  /**
   * staff_rooms updateMany
   */
  export type staff_roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff_rooms.
     */
    data: XOR<staff_roomsUpdateManyMutationInput, staff_roomsUncheckedUpdateManyInput>
    /**
     * Filter which staff_rooms to update
     */
    where?: staff_roomsWhereInput
    /**
     * Limit how many staff_rooms to update.
     */
    limit?: number
  }

  /**
   * staff_rooms updateManyAndReturn
   */
  export type staff_roomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * The data used to update staff_rooms.
     */
    data: XOR<staff_roomsUpdateManyMutationInput, staff_roomsUncheckedUpdateManyInput>
    /**
     * Filter which staff_rooms to update
     */
    where?: staff_roomsWhereInput
    /**
     * Limit how many staff_rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff_rooms upsert
   */
  export type staff_roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the staff_rooms to update in case it exists.
     */
    where: staff_roomsWhereUniqueInput
    /**
     * In case the staff_rooms found by the `where` argument doesn't exist, create a new staff_rooms with this data.
     */
    create: XOR<staff_roomsCreateInput, staff_roomsUncheckedCreateInput>
    /**
     * In case the staff_rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staff_roomsUpdateInput, staff_roomsUncheckedUpdateInput>
  }

  /**
   * staff_rooms delete
   */
  export type staff_roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
    /**
     * Filter which staff_rooms to delete.
     */
    where: staff_roomsWhereUniqueInput
  }

  /**
   * staff_rooms deleteMany
   */
  export type staff_roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_rooms to delete
     */
    where?: staff_roomsWhereInput
    /**
     * Limit how many staff_rooms to delete.
     */
    limit?: number
  }

  /**
   * staff_rooms without action
   */
  export type staff_roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_rooms
     */
    select?: staff_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff_rooms
     */
    omit?: staff_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staff_roomsInclude<ExtArgs> | null
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


  export const PatientsScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    address: 'address',
    contact_number: 'contact_number',
    email_address: 'email_address',
    image: 'image',
    chronic_diagnosis: 'chronic_diagnosis',
    dr_id: 'dr_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const QuesScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    staff_id: 'staff_id',
    room_id: 'room_id',
    queue_number: 'queue_number',
    status: 'status',
    sign_in_time: 'sign_in_time',
    started_time: 'started_time',
    completed_time: 'completed_time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuesScalarFieldEnum = (typeof QuesScalarFieldEnum)[keyof typeof QuesScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    room_number: 'room_number',
    room_name: 'room_name',
    room_type: 'room_type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    position: 'position',
    image: 'image',
    years_of_service: 'years_of_service',
    monthly_wages: 'monthly_wages',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const Staff_roomsScalarFieldEnum: {
    id: 'id',
    staff_id: 'staff_id',
    room_id: 'room_id',
    sign_in_date: 'sign_in_date',
    sign_in_time: 'sign_in_time',
    sign_out_time: 'sign_out_time'
  };

  export type Staff_roomsScalarFieldEnum = (typeof Staff_roomsScalarFieldEnum)[keyof typeof Staff_roomsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'que_status'
   */
  export type Enumque_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'que_status'>
    


  /**
   * Reference to a field of type 'que_status[]'
   */
  export type ListEnumque_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'que_status[]'>
    


  /**
   * Reference to a field of type 'staff_position'
   */
  export type Enumstaff_positionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'staff_position'>
    


  /**
   * Reference to a field of type 'staff_position[]'
   */
  export type ListEnumstaff_positionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'staff_position[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type patientsWhereInput = {
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    id?: IntFilter<"patients"> | number
    full_name?: StringFilter<"patients"> | string
    address?: StringNullableFilter<"patients"> | string | null
    contact_number?: StringNullableFilter<"patients"> | string | null
    email_address?: StringNullableFilter<"patients"> | string | null
    image?: BytesNullableFilter<"patients"> | Uint8Array | null
    chronic_diagnosis?: StringNullableFilter<"patients"> | string | null
    dr_id?: IntNullableFilter<"patients"> | number | null
    created_at?: DateTimeNullableFilter<"patients"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"patients"> | Date | string | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    ques?: QuesListRelationFilter
  }

  export type patientsOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    address?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    email_address?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    chronic_diagnosis?: SortOrderInput | SortOrder
    dr_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    staff?: staffOrderByWithRelationInput
    ques?: quesOrderByRelationAggregateInput
  }

  export type patientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    full_name?: StringFilter<"patients"> | string
    address?: StringNullableFilter<"patients"> | string | null
    contact_number?: StringNullableFilter<"patients"> | string | null
    email_address?: StringNullableFilter<"patients"> | string | null
    image?: BytesNullableFilter<"patients"> | Uint8Array | null
    chronic_diagnosis?: StringNullableFilter<"patients"> | string | null
    dr_id?: IntNullableFilter<"patients"> | number | null
    created_at?: DateTimeNullableFilter<"patients"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"patients"> | Date | string | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    ques?: QuesListRelationFilter
  }, "id">

  export type patientsOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    address?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    email_address?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    chronic_diagnosis?: SortOrderInput | SortOrder
    dr_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: patientsCountOrderByAggregateInput
    _avg?: patientsAvgOrderByAggregateInput
    _max?: patientsMaxOrderByAggregateInput
    _min?: patientsMinOrderByAggregateInput
    _sum?: patientsSumOrderByAggregateInput
  }

  export type patientsScalarWhereWithAggregatesInput = {
    AND?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    OR?: patientsScalarWhereWithAggregatesInput[]
    NOT?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"patients"> | number
    full_name?: StringWithAggregatesFilter<"patients"> | string
    address?: StringNullableWithAggregatesFilter<"patients"> | string | null
    contact_number?: StringNullableWithAggregatesFilter<"patients"> | string | null
    email_address?: StringNullableWithAggregatesFilter<"patients"> | string | null
    image?: BytesNullableWithAggregatesFilter<"patients"> | Uint8Array | null
    chronic_diagnosis?: StringNullableWithAggregatesFilter<"patients"> | string | null
    dr_id?: IntNullableWithAggregatesFilter<"patients"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"patients"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"patients"> | Date | string | null
  }

  export type quesWhereInput = {
    AND?: quesWhereInput | quesWhereInput[]
    OR?: quesWhereInput[]
    NOT?: quesWhereInput | quesWhereInput[]
    id?: IntFilter<"ques"> | number
    patient_id?: IntFilter<"ques"> | number
    staff_id?: IntFilter<"ques"> | number
    room_id?: IntFilter<"ques"> | number
    queue_number?: IntFilter<"ques"> | number
    status?: Enumque_statusNullableFilter<"ques"> | $Enums.que_status | null
    sign_in_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    started_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    completed_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ques"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ques"> | Date | string | null
    patients?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type quesOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
    status?: SortOrderInput | SortOrder
    sign_in_time?: SortOrderInput | SortOrder
    started_time?: SortOrderInput | SortOrder
    completed_time?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    patients?: patientsOrderByWithRelationInput
    rooms?: roomsOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type quesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: quesWhereInput | quesWhereInput[]
    OR?: quesWhereInput[]
    NOT?: quesWhereInput | quesWhereInput[]
    patient_id?: IntFilter<"ques"> | number
    staff_id?: IntFilter<"ques"> | number
    room_id?: IntFilter<"ques"> | number
    queue_number?: IntFilter<"ques"> | number
    status?: Enumque_statusNullableFilter<"ques"> | $Enums.que_status | null
    sign_in_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    started_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    completed_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ques"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ques"> | Date | string | null
    patients?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "id">

  export type quesOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
    status?: SortOrderInput | SortOrder
    sign_in_time?: SortOrderInput | SortOrder
    started_time?: SortOrderInput | SortOrder
    completed_time?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: quesCountOrderByAggregateInput
    _avg?: quesAvgOrderByAggregateInput
    _max?: quesMaxOrderByAggregateInput
    _min?: quesMinOrderByAggregateInput
    _sum?: quesSumOrderByAggregateInput
  }

  export type quesScalarWhereWithAggregatesInput = {
    AND?: quesScalarWhereWithAggregatesInput | quesScalarWhereWithAggregatesInput[]
    OR?: quesScalarWhereWithAggregatesInput[]
    NOT?: quesScalarWhereWithAggregatesInput | quesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ques"> | number
    patient_id?: IntWithAggregatesFilter<"ques"> | number
    staff_id?: IntWithAggregatesFilter<"ques"> | number
    room_id?: IntWithAggregatesFilter<"ques"> | number
    queue_number?: IntWithAggregatesFilter<"ques"> | number
    status?: Enumque_statusNullableWithAggregatesFilter<"ques"> | $Enums.que_status | null
    sign_in_time?: DateTimeNullableWithAggregatesFilter<"ques"> | Date | string | null
    started_time?: DateTimeNullableWithAggregatesFilter<"ques"> | Date | string | null
    completed_time?: DateTimeNullableWithAggregatesFilter<"ques"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ques"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ques"> | Date | string | null
  }

  export type roomsWhereInput = {
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    id?: IntFilter<"rooms"> | number
    room_number?: StringFilter<"rooms"> | string
    room_name?: StringNullableFilter<"rooms"> | string | null
    room_type?: StringNullableFilter<"rooms"> | string | null
    created_at?: DateTimeNullableFilter<"rooms"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rooms"> | Date | string | null
    ques?: QuesListRelationFilter
    staff_rooms?: Staff_roomsListRelationFilter
  }

  export type roomsOrderByWithRelationInput = {
    id?: SortOrder
    room_number?: SortOrder
    room_name?: SortOrderInput | SortOrder
    room_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    ques?: quesOrderByRelationAggregateInput
    staff_rooms?: staff_roomsOrderByRelationAggregateInput
  }

  export type roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    room_number?: StringFilter<"rooms"> | string
    room_name?: StringNullableFilter<"rooms"> | string | null
    room_type?: StringNullableFilter<"rooms"> | string | null
    created_at?: DateTimeNullableFilter<"rooms"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rooms"> | Date | string | null
    ques?: QuesListRelationFilter
    staff_rooms?: Staff_roomsListRelationFilter
  }, "id">

  export type roomsOrderByWithAggregationInput = {
    id?: SortOrder
    room_number?: SortOrder
    room_name?: SortOrderInput | SortOrder
    room_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: roomsCountOrderByAggregateInput
    _avg?: roomsAvgOrderByAggregateInput
    _max?: roomsMaxOrderByAggregateInput
    _min?: roomsMinOrderByAggregateInput
    _sum?: roomsSumOrderByAggregateInput
  }

  export type roomsScalarWhereWithAggregatesInput = {
    AND?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    OR?: roomsScalarWhereWithAggregatesInput[]
    NOT?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rooms"> | number
    room_number?: StringWithAggregatesFilter<"rooms"> | string
    room_name?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    room_type?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"rooms"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"rooms"> | Date | string | null
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    id?: IntFilter<"staff"> | number
    full_name?: StringFilter<"staff"> | string
    position?: Enumstaff_positionFilter<"staff"> | $Enums.staff_position
    image?: BytesNullableFilter<"staff"> | Uint8Array | null
    years_of_service?: IntNullableFilter<"staff"> | number | null
    monthly_wages?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"staff"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"staff"> | Date | string | null
    patients?: PatientsListRelationFilter
    ques?: QuesListRelationFilter
    staff_rooms?: Staff_roomsListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    image?: SortOrderInput | SortOrder
    years_of_service?: SortOrderInput | SortOrder
    monthly_wages?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    patients?: patientsOrderByRelationAggregateInput
    ques?: quesOrderByRelationAggregateInput
    staff_rooms?: staff_roomsOrderByRelationAggregateInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    full_name?: StringFilter<"staff"> | string
    position?: Enumstaff_positionFilter<"staff"> | $Enums.staff_position
    image?: BytesNullableFilter<"staff"> | Uint8Array | null
    years_of_service?: IntNullableFilter<"staff"> | number | null
    monthly_wages?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"staff"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"staff"> | Date | string | null
    patients?: PatientsListRelationFilter
    ques?: QuesListRelationFilter
    staff_rooms?: Staff_roomsListRelationFilter
  }, "id">

  export type staffOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    image?: SortOrderInput | SortOrder
    years_of_service?: SortOrderInput | SortOrder
    monthly_wages?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"staff"> | number
    full_name?: StringWithAggregatesFilter<"staff"> | string
    position?: Enumstaff_positionWithAggregatesFilter<"staff"> | $Enums.staff_position
    image?: BytesNullableWithAggregatesFilter<"staff"> | Uint8Array | null
    years_of_service?: IntNullableWithAggregatesFilter<"staff"> | number | null
    monthly_wages?: DecimalNullableWithAggregatesFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
  }

  export type staff_roomsWhereInput = {
    AND?: staff_roomsWhereInput | staff_roomsWhereInput[]
    OR?: staff_roomsWhereInput[]
    NOT?: staff_roomsWhereInput | staff_roomsWhereInput[]
    id?: IntFilter<"staff_rooms"> | number
    staff_id?: IntFilter<"staff_rooms"> | number
    room_id?: IntFilter<"staff_rooms"> | number
    sign_in_date?: DateTimeFilter<"staff_rooms"> | Date | string
    sign_in_time?: DateTimeNullableFilter<"staff_rooms"> | Date | string | null
    sign_out_time?: DateTimeNullableFilter<"staff_rooms"> | Date | string | null
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type staff_roomsOrderByWithRelationInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    sign_in_date?: SortOrder
    sign_in_time?: SortOrderInput | SortOrder
    sign_out_time?: SortOrderInput | SortOrder
    rooms?: roomsOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type staff_roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    staff_id_room_id_sign_in_date?: staff_roomsStaff_idRoom_idSign_in_dateCompoundUniqueInput
    AND?: staff_roomsWhereInput | staff_roomsWhereInput[]
    OR?: staff_roomsWhereInput[]
    NOT?: staff_roomsWhereInput | staff_roomsWhereInput[]
    staff_id?: IntFilter<"staff_rooms"> | number
    room_id?: IntFilter<"staff_rooms"> | number
    sign_in_date?: DateTimeFilter<"staff_rooms"> | Date | string
    sign_in_time?: DateTimeNullableFilter<"staff_rooms"> | Date | string | null
    sign_out_time?: DateTimeNullableFilter<"staff_rooms"> | Date | string | null
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "id" | "staff_id_room_id_sign_in_date">

  export type staff_roomsOrderByWithAggregationInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    sign_in_date?: SortOrder
    sign_in_time?: SortOrderInput | SortOrder
    sign_out_time?: SortOrderInput | SortOrder
    _count?: staff_roomsCountOrderByAggregateInput
    _avg?: staff_roomsAvgOrderByAggregateInput
    _max?: staff_roomsMaxOrderByAggregateInput
    _min?: staff_roomsMinOrderByAggregateInput
    _sum?: staff_roomsSumOrderByAggregateInput
  }

  export type staff_roomsScalarWhereWithAggregatesInput = {
    AND?: staff_roomsScalarWhereWithAggregatesInput | staff_roomsScalarWhereWithAggregatesInput[]
    OR?: staff_roomsScalarWhereWithAggregatesInput[]
    NOT?: staff_roomsScalarWhereWithAggregatesInput | staff_roomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"staff_rooms"> | number
    staff_id?: IntWithAggregatesFilter<"staff_rooms"> | number
    room_id?: IntWithAggregatesFilter<"staff_rooms"> | number
    sign_in_date?: DateTimeWithAggregatesFilter<"staff_rooms"> | Date | string
    sign_in_time?: DateTimeNullableWithAggregatesFilter<"staff_rooms"> | Date | string | null
    sign_out_time?: DateTimeNullableWithAggregatesFilter<"staff_rooms"> | Date | string | null
  }

  export type patientsCreateInput = {
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    staff?: staffCreateNestedOneWithoutPatientsInput
    ques?: quesCreateNestedManyWithoutPatientsInput
  }

  export type patientsUncheckedCreateInput = {
    id?: number
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    dr_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type patientsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneWithoutPatientsNestedInput
    ques?: quesUpdateManyWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    dr_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type patientsCreateManyInput = {
    id?: number
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    dr_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type patientsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    dr_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesCreateInput = {
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients: patientsCreateNestedOneWithoutQuesInput
    rooms: roomsCreateNestedOneWithoutQuesInput
    staff: staffCreateNestedOneWithoutQuesInput
  }

  export type quesUncheckedCreateInput = {
    id?: number
    patient_id: number
    staff_id: number
    room_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesUpdateInput = {
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUpdateOneRequiredWithoutQuesNestedInput
    rooms?: roomsUpdateOneRequiredWithoutQuesNestedInput
    staff?: staffUpdateOneRequiredWithoutQuesNestedInput
  }

  export type quesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesCreateManyInput = {
    id?: number
    patient_id: number
    staff_id: number
    room_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesUpdateManyMutationInput = {
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomsCreateInput = {
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesCreateNestedManyWithoutRoomsInput
    staff_rooms?: staff_roomsCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateInput = {
    id?: number
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesUncheckedCreateNestedManyWithoutRoomsInput
    staff_rooms?: staff_roomsUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsUpdateInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUpdateManyWithoutRoomsNestedInput
    staff_rooms?: staff_roomsUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUncheckedUpdateManyWithoutRoomsNestedInput
    staff_rooms?: staff_roomsUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type roomsCreateManyInput = {
    id?: number
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type roomsUpdateManyMutationInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffCreateInput = {
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients?: patientsCreateNestedManyWithoutStaffInput
    ques?: quesCreateNestedManyWithoutStaffInput
    staff_rooms?: staff_roomsCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    id?: number
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients?: patientsUncheckedCreateNestedManyWithoutStaffInput
    ques?: quesUncheckedCreateNestedManyWithoutStaffInput
    staff_rooms?: staff_roomsUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUpdateManyWithoutStaffNestedInput
    ques?: quesUpdateManyWithoutStaffNestedInput
    staff_rooms?: staff_roomsUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUncheckedUpdateManyWithoutStaffNestedInput
    ques?: quesUncheckedUpdateManyWithoutStaffNestedInput
    staff_rooms?: staff_roomsUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    id?: number
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type staffUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsCreateInput = {
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
    rooms: roomsCreateNestedOneWithoutStaff_roomsInput
    staff: staffCreateNestedOneWithoutStaff_roomsInput
  }

  export type staff_roomsUncheckedCreateInput = {
    id?: number
    staff_id: number
    room_id: number
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
  }

  export type staff_roomsUpdateInput = {
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneRequiredWithoutStaff_roomsNestedInput
    staff?: staffUpdateOneRequiredWithoutStaff_roomsNestedInput
  }

  export type staff_roomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsCreateManyInput = {
    id?: number
    staff_id: number
    room_id: number
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
  }

  export type staff_roomsUpdateManyMutationInput = {
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StaffNullableScalarRelationFilter = {
    is?: staffWhereInput | null
    isNot?: staffWhereInput | null
  }

  export type QuesListRelationFilter = {
    every?: quesWhereInput
    some?: quesWhereInput
    none?: quesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type quesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientsCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    address?: SortOrder
    contact_number?: SortOrder
    email_address?: SortOrder
    image?: SortOrder
    chronic_diagnosis?: SortOrder
    dr_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type patientsAvgOrderByAggregateInput = {
    id?: SortOrder
    dr_id?: SortOrder
  }

  export type patientsMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    address?: SortOrder
    contact_number?: SortOrder
    email_address?: SortOrder
    image?: SortOrder
    chronic_diagnosis?: SortOrder
    dr_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type patientsMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    address?: SortOrder
    contact_number?: SortOrder
    email_address?: SortOrder
    image?: SortOrder
    chronic_diagnosis?: SortOrder
    dr_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type patientsSumOrderByAggregateInput = {
    id?: SortOrder
    dr_id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumque_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.que_status | Enumque_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumque_statusNullableFilter<$PrismaModel> | $Enums.que_status | null
  }

  export type PatientsScalarRelationFilter = {
    is?: patientsWhereInput
    isNot?: patientsWhereInput
  }

  export type RoomsScalarRelationFilter = {
    is?: roomsWhereInput
    isNot?: roomsWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type quesCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
    status?: SortOrder
    sign_in_time?: SortOrder
    started_time?: SortOrder
    completed_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quesAvgOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
  }

  export type quesMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
    status?: SortOrder
    sign_in_time?: SortOrder
    started_time?: SortOrder
    completed_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quesMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
    status?: SortOrder
    sign_in_time?: SortOrder
    started_time?: SortOrder
    completed_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quesSumOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    queue_number?: SortOrder
  }

  export type Enumque_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.que_status | Enumque_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumque_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.que_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumque_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumque_statusNullableFilter<$PrismaModel>
  }

  export type Staff_roomsListRelationFilter = {
    every?: staff_roomsWhereInput
    some?: staff_roomsWhereInput
    none?: staff_roomsWhereInput
  }

  export type staff_roomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomsCountOrderByAggregateInput = {
    id?: SortOrder
    room_number?: SortOrder
    room_name?: SortOrder
    room_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roomsMaxOrderByAggregateInput = {
    id?: SortOrder
    room_number?: SortOrder
    room_name?: SortOrder
    room_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomsMinOrderByAggregateInput = {
    id?: SortOrder
    room_number?: SortOrder
    room_name?: SortOrder
    room_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumstaff_positionFilter<$PrismaModel = never> = {
    equals?: $Enums.staff_position | Enumstaff_positionFieldRefInput<$PrismaModel>
    in?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    notIn?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    not?: NestedEnumstaff_positionFilter<$PrismaModel> | $Enums.staff_position
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PatientsListRelationFilter = {
    every?: patientsWhereInput
    some?: patientsWhereInput
    none?: patientsWhereInput
  }

  export type patientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    image?: SortOrder
    years_of_service?: SortOrder
    monthly_wages?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    id?: SortOrder
    years_of_service?: SortOrder
    monthly_wages?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    image?: SortOrder
    years_of_service?: SortOrder
    monthly_wages?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    position?: SortOrder
    image?: SortOrder
    years_of_service?: SortOrder
    monthly_wages?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    id?: SortOrder
    years_of_service?: SortOrder
    monthly_wages?: SortOrder
  }

  export type Enumstaff_positionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.staff_position | Enumstaff_positionFieldRefInput<$PrismaModel>
    in?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    notIn?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    not?: NestedEnumstaff_positionWithAggregatesFilter<$PrismaModel> | $Enums.staff_position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstaff_positionFilter<$PrismaModel>
    _max?: NestedEnumstaff_positionFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type staff_roomsStaff_idRoom_idSign_in_dateCompoundUniqueInput = {
    staff_id: number
    room_id: number
    sign_in_date: Date | string
  }

  export type staff_roomsCountOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    sign_in_date?: SortOrder
    sign_in_time?: SortOrder
    sign_out_time?: SortOrder
  }

  export type staff_roomsAvgOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
  }

  export type staff_roomsMaxOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    sign_in_date?: SortOrder
    sign_in_time?: SortOrder
    sign_out_time?: SortOrder
  }

  export type staff_roomsMinOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
    sign_in_date?: SortOrder
    sign_in_time?: SortOrder
    sign_out_time?: SortOrder
  }

  export type staff_roomsSumOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    room_id?: SortOrder
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

  export type staffCreateNestedOneWithoutPatientsInput = {
    create?: XOR<staffCreateWithoutPatientsInput, staffUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: staffCreateOrConnectWithoutPatientsInput
    connect?: staffWhereUniqueInput
  }

  export type quesCreateNestedManyWithoutPatientsInput = {
    create?: XOR<quesCreateWithoutPatientsInput, quesUncheckedCreateWithoutPatientsInput> | quesCreateWithoutPatientsInput[] | quesUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutPatientsInput | quesCreateOrConnectWithoutPatientsInput[]
    createMany?: quesCreateManyPatientsInputEnvelope
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
  }

  export type quesUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<quesCreateWithoutPatientsInput, quesUncheckedCreateWithoutPatientsInput> | quesCreateWithoutPatientsInput[] | quesUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutPatientsInput | quesCreateOrConnectWithoutPatientsInput[]
    createMany?: quesCreateManyPatientsInputEnvelope
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type staffUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<staffCreateWithoutPatientsInput, staffUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: staffCreateOrConnectWithoutPatientsInput
    upsert?: staffUpsertWithoutPatientsInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutPatientsInput, staffUpdateWithoutPatientsInput>, staffUncheckedUpdateWithoutPatientsInput>
  }

  export type quesUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<quesCreateWithoutPatientsInput, quesUncheckedCreateWithoutPatientsInput> | quesCreateWithoutPatientsInput[] | quesUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutPatientsInput | quesCreateOrConnectWithoutPatientsInput[]
    upsert?: quesUpsertWithWhereUniqueWithoutPatientsInput | quesUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: quesCreateManyPatientsInputEnvelope
    set?: quesWhereUniqueInput | quesWhereUniqueInput[]
    disconnect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    delete?: quesWhereUniqueInput | quesWhereUniqueInput[]
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    update?: quesUpdateWithWhereUniqueWithoutPatientsInput | quesUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: quesUpdateManyWithWhereWithoutPatientsInput | quesUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: quesScalarWhereInput | quesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type quesUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<quesCreateWithoutPatientsInput, quesUncheckedCreateWithoutPatientsInput> | quesCreateWithoutPatientsInput[] | quesUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutPatientsInput | quesCreateOrConnectWithoutPatientsInput[]
    upsert?: quesUpsertWithWhereUniqueWithoutPatientsInput | quesUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: quesCreateManyPatientsInputEnvelope
    set?: quesWhereUniqueInput | quesWhereUniqueInput[]
    disconnect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    delete?: quesWhereUniqueInput | quesWhereUniqueInput[]
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    update?: quesUpdateWithWhereUniqueWithoutPatientsInput | quesUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: quesUpdateManyWithWhereWithoutPatientsInput | quesUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: quesScalarWhereInput | quesScalarWhereInput[]
  }

  export type patientsCreateNestedOneWithoutQuesInput = {
    create?: XOR<patientsCreateWithoutQuesInput, patientsUncheckedCreateWithoutQuesInput>
    connectOrCreate?: patientsCreateOrConnectWithoutQuesInput
    connect?: patientsWhereUniqueInput
  }

  export type roomsCreateNestedOneWithoutQuesInput = {
    create?: XOR<roomsCreateWithoutQuesInput, roomsUncheckedCreateWithoutQuesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutQuesInput
    connect?: roomsWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutQuesInput = {
    create?: XOR<staffCreateWithoutQuesInput, staffUncheckedCreateWithoutQuesInput>
    connectOrCreate?: staffCreateOrConnectWithoutQuesInput
    connect?: staffWhereUniqueInput
  }

  export type NullableEnumque_statusFieldUpdateOperationsInput = {
    set?: $Enums.que_status | null
  }

  export type patientsUpdateOneRequiredWithoutQuesNestedInput = {
    create?: XOR<patientsCreateWithoutQuesInput, patientsUncheckedCreateWithoutQuesInput>
    connectOrCreate?: patientsCreateOrConnectWithoutQuesInput
    upsert?: patientsUpsertWithoutQuesInput
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutQuesInput, patientsUpdateWithoutQuesInput>, patientsUncheckedUpdateWithoutQuesInput>
  }

  export type roomsUpdateOneRequiredWithoutQuesNestedInput = {
    create?: XOR<roomsCreateWithoutQuesInput, roomsUncheckedCreateWithoutQuesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutQuesInput
    upsert?: roomsUpsertWithoutQuesInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutQuesInput, roomsUpdateWithoutQuesInput>, roomsUncheckedUpdateWithoutQuesInput>
  }

  export type staffUpdateOneRequiredWithoutQuesNestedInput = {
    create?: XOR<staffCreateWithoutQuesInput, staffUncheckedCreateWithoutQuesInput>
    connectOrCreate?: staffCreateOrConnectWithoutQuesInput
    upsert?: staffUpsertWithoutQuesInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutQuesInput, staffUpdateWithoutQuesInput>, staffUncheckedUpdateWithoutQuesInput>
  }

  export type quesCreateNestedManyWithoutRoomsInput = {
    create?: XOR<quesCreateWithoutRoomsInput, quesUncheckedCreateWithoutRoomsInput> | quesCreateWithoutRoomsInput[] | quesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutRoomsInput | quesCreateOrConnectWithoutRoomsInput[]
    createMany?: quesCreateManyRoomsInputEnvelope
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
  }

  export type staff_roomsCreateNestedManyWithoutRoomsInput = {
    create?: XOR<staff_roomsCreateWithoutRoomsInput, staff_roomsUncheckedCreateWithoutRoomsInput> | staff_roomsCreateWithoutRoomsInput[] | staff_roomsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutRoomsInput | staff_roomsCreateOrConnectWithoutRoomsInput[]
    createMany?: staff_roomsCreateManyRoomsInputEnvelope
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
  }

  export type quesUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<quesCreateWithoutRoomsInput, quesUncheckedCreateWithoutRoomsInput> | quesCreateWithoutRoomsInput[] | quesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutRoomsInput | quesCreateOrConnectWithoutRoomsInput[]
    createMany?: quesCreateManyRoomsInputEnvelope
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
  }

  export type staff_roomsUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<staff_roomsCreateWithoutRoomsInput, staff_roomsUncheckedCreateWithoutRoomsInput> | staff_roomsCreateWithoutRoomsInput[] | staff_roomsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutRoomsInput | staff_roomsCreateOrConnectWithoutRoomsInput[]
    createMany?: staff_roomsCreateManyRoomsInputEnvelope
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
  }

  export type quesUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<quesCreateWithoutRoomsInput, quesUncheckedCreateWithoutRoomsInput> | quesCreateWithoutRoomsInput[] | quesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutRoomsInput | quesCreateOrConnectWithoutRoomsInput[]
    upsert?: quesUpsertWithWhereUniqueWithoutRoomsInput | quesUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: quesCreateManyRoomsInputEnvelope
    set?: quesWhereUniqueInput | quesWhereUniqueInput[]
    disconnect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    delete?: quesWhereUniqueInput | quesWhereUniqueInput[]
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    update?: quesUpdateWithWhereUniqueWithoutRoomsInput | quesUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: quesUpdateManyWithWhereWithoutRoomsInput | quesUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: quesScalarWhereInput | quesScalarWhereInput[]
  }

  export type staff_roomsUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<staff_roomsCreateWithoutRoomsInput, staff_roomsUncheckedCreateWithoutRoomsInput> | staff_roomsCreateWithoutRoomsInput[] | staff_roomsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutRoomsInput | staff_roomsCreateOrConnectWithoutRoomsInput[]
    upsert?: staff_roomsUpsertWithWhereUniqueWithoutRoomsInput | staff_roomsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: staff_roomsCreateManyRoomsInputEnvelope
    set?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    disconnect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    delete?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    update?: staff_roomsUpdateWithWhereUniqueWithoutRoomsInput | staff_roomsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: staff_roomsUpdateManyWithWhereWithoutRoomsInput | staff_roomsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: staff_roomsScalarWhereInput | staff_roomsScalarWhereInput[]
  }

  export type quesUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<quesCreateWithoutRoomsInput, quesUncheckedCreateWithoutRoomsInput> | quesCreateWithoutRoomsInput[] | quesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: quesCreateOrConnectWithoutRoomsInput | quesCreateOrConnectWithoutRoomsInput[]
    upsert?: quesUpsertWithWhereUniqueWithoutRoomsInput | quesUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: quesCreateManyRoomsInputEnvelope
    set?: quesWhereUniqueInput | quesWhereUniqueInput[]
    disconnect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    delete?: quesWhereUniqueInput | quesWhereUniqueInput[]
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    update?: quesUpdateWithWhereUniqueWithoutRoomsInput | quesUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: quesUpdateManyWithWhereWithoutRoomsInput | quesUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: quesScalarWhereInput | quesScalarWhereInput[]
  }

  export type staff_roomsUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<staff_roomsCreateWithoutRoomsInput, staff_roomsUncheckedCreateWithoutRoomsInput> | staff_roomsCreateWithoutRoomsInput[] | staff_roomsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutRoomsInput | staff_roomsCreateOrConnectWithoutRoomsInput[]
    upsert?: staff_roomsUpsertWithWhereUniqueWithoutRoomsInput | staff_roomsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: staff_roomsCreateManyRoomsInputEnvelope
    set?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    disconnect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    delete?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    update?: staff_roomsUpdateWithWhereUniqueWithoutRoomsInput | staff_roomsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: staff_roomsUpdateManyWithWhereWithoutRoomsInput | staff_roomsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: staff_roomsScalarWhereInput | staff_roomsScalarWhereInput[]
  }

  export type patientsCreateNestedManyWithoutStaffInput = {
    create?: XOR<patientsCreateWithoutStaffInput, patientsUncheckedCreateWithoutStaffInput> | patientsCreateWithoutStaffInput[] | patientsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutStaffInput | patientsCreateOrConnectWithoutStaffInput[]
    createMany?: patientsCreateManyStaffInputEnvelope
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
  }

  export type quesCreateNestedManyWithoutStaffInput = {
    create?: XOR<quesCreateWithoutStaffInput, quesUncheckedCreateWithoutStaffInput> | quesCreateWithoutStaffInput[] | quesUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: quesCreateOrConnectWithoutStaffInput | quesCreateOrConnectWithoutStaffInput[]
    createMany?: quesCreateManyStaffInputEnvelope
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
  }

  export type staff_roomsCreateNestedManyWithoutStaffInput = {
    create?: XOR<staff_roomsCreateWithoutStaffInput, staff_roomsUncheckedCreateWithoutStaffInput> | staff_roomsCreateWithoutStaffInput[] | staff_roomsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutStaffInput | staff_roomsCreateOrConnectWithoutStaffInput[]
    createMany?: staff_roomsCreateManyStaffInputEnvelope
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
  }

  export type patientsUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<patientsCreateWithoutStaffInput, patientsUncheckedCreateWithoutStaffInput> | patientsCreateWithoutStaffInput[] | patientsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutStaffInput | patientsCreateOrConnectWithoutStaffInput[]
    createMany?: patientsCreateManyStaffInputEnvelope
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
  }

  export type quesUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<quesCreateWithoutStaffInput, quesUncheckedCreateWithoutStaffInput> | quesCreateWithoutStaffInput[] | quesUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: quesCreateOrConnectWithoutStaffInput | quesCreateOrConnectWithoutStaffInput[]
    createMany?: quesCreateManyStaffInputEnvelope
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
  }

  export type staff_roomsUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<staff_roomsCreateWithoutStaffInput, staff_roomsUncheckedCreateWithoutStaffInput> | staff_roomsCreateWithoutStaffInput[] | staff_roomsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutStaffInput | staff_roomsCreateOrConnectWithoutStaffInput[]
    createMany?: staff_roomsCreateManyStaffInputEnvelope
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
  }

  export type Enumstaff_positionFieldUpdateOperationsInput = {
    set?: $Enums.staff_position
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type patientsUpdateManyWithoutStaffNestedInput = {
    create?: XOR<patientsCreateWithoutStaffInput, patientsUncheckedCreateWithoutStaffInput> | patientsCreateWithoutStaffInput[] | patientsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutStaffInput | patientsCreateOrConnectWithoutStaffInput[]
    upsert?: patientsUpsertWithWhereUniqueWithoutStaffInput | patientsUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: patientsCreateManyStaffInputEnvelope
    set?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    disconnect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    delete?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    update?: patientsUpdateWithWhereUniqueWithoutStaffInput | patientsUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: patientsUpdateManyWithWhereWithoutStaffInput | patientsUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: patientsScalarWhereInput | patientsScalarWhereInput[]
  }

  export type quesUpdateManyWithoutStaffNestedInput = {
    create?: XOR<quesCreateWithoutStaffInput, quesUncheckedCreateWithoutStaffInput> | quesCreateWithoutStaffInput[] | quesUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: quesCreateOrConnectWithoutStaffInput | quesCreateOrConnectWithoutStaffInput[]
    upsert?: quesUpsertWithWhereUniqueWithoutStaffInput | quesUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: quesCreateManyStaffInputEnvelope
    set?: quesWhereUniqueInput | quesWhereUniqueInput[]
    disconnect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    delete?: quesWhereUniqueInput | quesWhereUniqueInput[]
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    update?: quesUpdateWithWhereUniqueWithoutStaffInput | quesUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: quesUpdateManyWithWhereWithoutStaffInput | quesUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: quesScalarWhereInput | quesScalarWhereInput[]
  }

  export type staff_roomsUpdateManyWithoutStaffNestedInput = {
    create?: XOR<staff_roomsCreateWithoutStaffInput, staff_roomsUncheckedCreateWithoutStaffInput> | staff_roomsCreateWithoutStaffInput[] | staff_roomsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutStaffInput | staff_roomsCreateOrConnectWithoutStaffInput[]
    upsert?: staff_roomsUpsertWithWhereUniqueWithoutStaffInput | staff_roomsUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: staff_roomsCreateManyStaffInputEnvelope
    set?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    disconnect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    delete?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    update?: staff_roomsUpdateWithWhereUniqueWithoutStaffInput | staff_roomsUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: staff_roomsUpdateManyWithWhereWithoutStaffInput | staff_roomsUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: staff_roomsScalarWhereInput | staff_roomsScalarWhereInput[]
  }

  export type patientsUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<patientsCreateWithoutStaffInput, patientsUncheckedCreateWithoutStaffInput> | patientsCreateWithoutStaffInput[] | patientsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutStaffInput | patientsCreateOrConnectWithoutStaffInput[]
    upsert?: patientsUpsertWithWhereUniqueWithoutStaffInput | patientsUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: patientsCreateManyStaffInputEnvelope
    set?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    disconnect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    delete?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    update?: patientsUpdateWithWhereUniqueWithoutStaffInput | patientsUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: patientsUpdateManyWithWhereWithoutStaffInput | patientsUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: patientsScalarWhereInput | patientsScalarWhereInput[]
  }

  export type quesUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<quesCreateWithoutStaffInput, quesUncheckedCreateWithoutStaffInput> | quesCreateWithoutStaffInput[] | quesUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: quesCreateOrConnectWithoutStaffInput | quesCreateOrConnectWithoutStaffInput[]
    upsert?: quesUpsertWithWhereUniqueWithoutStaffInput | quesUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: quesCreateManyStaffInputEnvelope
    set?: quesWhereUniqueInput | quesWhereUniqueInput[]
    disconnect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    delete?: quesWhereUniqueInput | quesWhereUniqueInput[]
    connect?: quesWhereUniqueInput | quesWhereUniqueInput[]
    update?: quesUpdateWithWhereUniqueWithoutStaffInput | quesUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: quesUpdateManyWithWhereWithoutStaffInput | quesUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: quesScalarWhereInput | quesScalarWhereInput[]
  }

  export type staff_roomsUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<staff_roomsCreateWithoutStaffInput, staff_roomsUncheckedCreateWithoutStaffInput> | staff_roomsCreateWithoutStaffInput[] | staff_roomsUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staff_roomsCreateOrConnectWithoutStaffInput | staff_roomsCreateOrConnectWithoutStaffInput[]
    upsert?: staff_roomsUpsertWithWhereUniqueWithoutStaffInput | staff_roomsUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: staff_roomsCreateManyStaffInputEnvelope
    set?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    disconnect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    delete?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    connect?: staff_roomsWhereUniqueInput | staff_roomsWhereUniqueInput[]
    update?: staff_roomsUpdateWithWhereUniqueWithoutStaffInput | staff_roomsUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: staff_roomsUpdateManyWithWhereWithoutStaffInput | staff_roomsUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: staff_roomsScalarWhereInput | staff_roomsScalarWhereInput[]
  }

  export type roomsCreateNestedOneWithoutStaff_roomsInput = {
    create?: XOR<roomsCreateWithoutStaff_roomsInput, roomsUncheckedCreateWithoutStaff_roomsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutStaff_roomsInput
    connect?: roomsWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutStaff_roomsInput = {
    create?: XOR<staffCreateWithoutStaff_roomsInput, staffUncheckedCreateWithoutStaff_roomsInput>
    connectOrCreate?: staffCreateOrConnectWithoutStaff_roomsInput
    connect?: staffWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type roomsUpdateOneRequiredWithoutStaff_roomsNestedInput = {
    create?: XOR<roomsCreateWithoutStaff_roomsInput, roomsUncheckedCreateWithoutStaff_roomsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutStaff_roomsInput
    upsert?: roomsUpsertWithoutStaff_roomsInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutStaff_roomsInput, roomsUpdateWithoutStaff_roomsInput>, roomsUncheckedUpdateWithoutStaff_roomsInput>
  }

  export type staffUpdateOneRequiredWithoutStaff_roomsNestedInput = {
    create?: XOR<staffCreateWithoutStaff_roomsInput, staffUncheckedCreateWithoutStaff_roomsInput>
    connectOrCreate?: staffCreateOrConnectWithoutStaff_roomsInput
    upsert?: staffUpsertWithoutStaff_roomsInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutStaff_roomsInput, staffUpdateWithoutStaff_roomsInput>, staffUncheckedUpdateWithoutStaff_roomsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumque_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.que_status | Enumque_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumque_statusNullableFilter<$PrismaModel> | $Enums.que_status | null
  }

  export type NestedEnumque_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.que_status | Enumque_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.que_status[] | ListEnumque_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumque_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.que_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumque_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumque_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumstaff_positionFilter<$PrismaModel = never> = {
    equals?: $Enums.staff_position | Enumstaff_positionFieldRefInput<$PrismaModel>
    in?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    notIn?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    not?: NestedEnumstaff_positionFilter<$PrismaModel> | $Enums.staff_position
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumstaff_positionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.staff_position | Enumstaff_positionFieldRefInput<$PrismaModel>
    in?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    notIn?: $Enums.staff_position[] | ListEnumstaff_positionFieldRefInput<$PrismaModel>
    not?: NestedEnumstaff_positionWithAggregatesFilter<$PrismaModel> | $Enums.staff_position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstaff_positionFilter<$PrismaModel>
    _max?: NestedEnumstaff_positionFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type staffCreateWithoutPatientsInput = {
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesCreateNestedManyWithoutStaffInput
    staff_rooms?: staff_roomsCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutPatientsInput = {
    id?: number
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesUncheckedCreateNestedManyWithoutStaffInput
    staff_rooms?: staff_roomsUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutPatientsInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutPatientsInput, staffUncheckedCreateWithoutPatientsInput>
  }

  export type quesCreateWithoutPatientsInput = {
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    rooms: roomsCreateNestedOneWithoutQuesInput
    staff: staffCreateNestedOneWithoutQuesInput
  }

  export type quesUncheckedCreateWithoutPatientsInput = {
    id?: number
    staff_id: number
    room_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesCreateOrConnectWithoutPatientsInput = {
    where: quesWhereUniqueInput
    create: XOR<quesCreateWithoutPatientsInput, quesUncheckedCreateWithoutPatientsInput>
  }

  export type quesCreateManyPatientsInputEnvelope = {
    data: quesCreateManyPatientsInput | quesCreateManyPatientsInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutPatientsInput = {
    update: XOR<staffUpdateWithoutPatientsInput, staffUncheckedUpdateWithoutPatientsInput>
    create: XOR<staffCreateWithoutPatientsInput, staffUncheckedCreateWithoutPatientsInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutPatientsInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutPatientsInput, staffUncheckedUpdateWithoutPatientsInput>
  }

  export type staffUpdateWithoutPatientsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUpdateManyWithoutStaffNestedInput
    staff_rooms?: staff_roomsUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutPatientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUncheckedUpdateManyWithoutStaffNestedInput
    staff_rooms?: staff_roomsUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type quesUpsertWithWhereUniqueWithoutPatientsInput = {
    where: quesWhereUniqueInput
    update: XOR<quesUpdateWithoutPatientsInput, quesUncheckedUpdateWithoutPatientsInput>
    create: XOR<quesCreateWithoutPatientsInput, quesUncheckedCreateWithoutPatientsInput>
  }

  export type quesUpdateWithWhereUniqueWithoutPatientsInput = {
    where: quesWhereUniqueInput
    data: XOR<quesUpdateWithoutPatientsInput, quesUncheckedUpdateWithoutPatientsInput>
  }

  export type quesUpdateManyWithWhereWithoutPatientsInput = {
    where: quesScalarWhereInput
    data: XOR<quesUpdateManyMutationInput, quesUncheckedUpdateManyWithoutPatientsInput>
  }

  export type quesScalarWhereInput = {
    AND?: quesScalarWhereInput | quesScalarWhereInput[]
    OR?: quesScalarWhereInput[]
    NOT?: quesScalarWhereInput | quesScalarWhereInput[]
    id?: IntFilter<"ques"> | number
    patient_id?: IntFilter<"ques"> | number
    staff_id?: IntFilter<"ques"> | number
    room_id?: IntFilter<"ques"> | number
    queue_number?: IntFilter<"ques"> | number
    status?: Enumque_statusNullableFilter<"ques"> | $Enums.que_status | null
    sign_in_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    started_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    completed_time?: DateTimeNullableFilter<"ques"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ques"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ques"> | Date | string | null
  }

  export type patientsCreateWithoutQuesInput = {
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    staff?: staffCreateNestedOneWithoutPatientsInput
  }

  export type patientsUncheckedCreateWithoutQuesInput = {
    id?: number
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    dr_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type patientsCreateOrConnectWithoutQuesInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutQuesInput, patientsUncheckedCreateWithoutQuesInput>
  }

  export type roomsCreateWithoutQuesInput = {
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    staff_rooms?: staff_roomsCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutQuesInput = {
    id?: number
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    staff_rooms?: staff_roomsUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutQuesInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutQuesInput, roomsUncheckedCreateWithoutQuesInput>
  }

  export type staffCreateWithoutQuesInput = {
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients?: patientsCreateNestedManyWithoutStaffInput
    staff_rooms?: staff_roomsCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutQuesInput = {
    id?: number
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients?: patientsUncheckedCreateNestedManyWithoutStaffInput
    staff_rooms?: staff_roomsUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutQuesInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutQuesInput, staffUncheckedCreateWithoutQuesInput>
  }

  export type patientsUpsertWithoutQuesInput = {
    update: XOR<patientsUpdateWithoutQuesInput, patientsUncheckedUpdateWithoutQuesInput>
    create: XOR<patientsCreateWithoutQuesInput, patientsUncheckedCreateWithoutQuesInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutQuesInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutQuesInput, patientsUncheckedUpdateWithoutQuesInput>
  }

  export type patientsUpdateWithoutQuesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateWithoutQuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    dr_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomsUpsertWithoutQuesInput = {
    update: XOR<roomsUpdateWithoutQuesInput, roomsUncheckedUpdateWithoutQuesInput>
    create: XOR<roomsCreateWithoutQuesInput, roomsUncheckedCreateWithoutQuesInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutQuesInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutQuesInput, roomsUncheckedUpdateWithoutQuesInput>
  }

  export type roomsUpdateWithoutQuesInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_rooms?: staff_roomsUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutQuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_rooms?: staff_roomsUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type staffUpsertWithoutQuesInput = {
    update: XOR<staffUpdateWithoutQuesInput, staffUncheckedUpdateWithoutQuesInput>
    create: XOR<staffCreateWithoutQuesInput, staffUncheckedCreateWithoutQuesInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutQuesInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutQuesInput, staffUncheckedUpdateWithoutQuesInput>
  }

  export type staffUpdateWithoutQuesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUpdateManyWithoutStaffNestedInput
    staff_rooms?: staff_roomsUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutQuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUncheckedUpdateManyWithoutStaffNestedInput
    staff_rooms?: staff_roomsUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type quesCreateWithoutRoomsInput = {
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients: patientsCreateNestedOneWithoutQuesInput
    staff: staffCreateNestedOneWithoutQuesInput
  }

  export type quesUncheckedCreateWithoutRoomsInput = {
    id?: number
    patient_id: number
    staff_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesCreateOrConnectWithoutRoomsInput = {
    where: quesWhereUniqueInput
    create: XOR<quesCreateWithoutRoomsInput, quesUncheckedCreateWithoutRoomsInput>
  }

  export type quesCreateManyRoomsInputEnvelope = {
    data: quesCreateManyRoomsInput | quesCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type staff_roomsCreateWithoutRoomsInput = {
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
    staff: staffCreateNestedOneWithoutStaff_roomsInput
  }

  export type staff_roomsUncheckedCreateWithoutRoomsInput = {
    id?: number
    staff_id: number
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
  }

  export type staff_roomsCreateOrConnectWithoutRoomsInput = {
    where: staff_roomsWhereUniqueInput
    create: XOR<staff_roomsCreateWithoutRoomsInput, staff_roomsUncheckedCreateWithoutRoomsInput>
  }

  export type staff_roomsCreateManyRoomsInputEnvelope = {
    data: staff_roomsCreateManyRoomsInput | staff_roomsCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type quesUpsertWithWhereUniqueWithoutRoomsInput = {
    where: quesWhereUniqueInput
    update: XOR<quesUpdateWithoutRoomsInput, quesUncheckedUpdateWithoutRoomsInput>
    create: XOR<quesCreateWithoutRoomsInput, quesUncheckedCreateWithoutRoomsInput>
  }

  export type quesUpdateWithWhereUniqueWithoutRoomsInput = {
    where: quesWhereUniqueInput
    data: XOR<quesUpdateWithoutRoomsInput, quesUncheckedUpdateWithoutRoomsInput>
  }

  export type quesUpdateManyWithWhereWithoutRoomsInput = {
    where: quesScalarWhereInput
    data: XOR<quesUpdateManyMutationInput, quesUncheckedUpdateManyWithoutRoomsInput>
  }

  export type staff_roomsUpsertWithWhereUniqueWithoutRoomsInput = {
    where: staff_roomsWhereUniqueInput
    update: XOR<staff_roomsUpdateWithoutRoomsInput, staff_roomsUncheckedUpdateWithoutRoomsInput>
    create: XOR<staff_roomsCreateWithoutRoomsInput, staff_roomsUncheckedCreateWithoutRoomsInput>
  }

  export type staff_roomsUpdateWithWhereUniqueWithoutRoomsInput = {
    where: staff_roomsWhereUniqueInput
    data: XOR<staff_roomsUpdateWithoutRoomsInput, staff_roomsUncheckedUpdateWithoutRoomsInput>
  }

  export type staff_roomsUpdateManyWithWhereWithoutRoomsInput = {
    where: staff_roomsScalarWhereInput
    data: XOR<staff_roomsUpdateManyMutationInput, staff_roomsUncheckedUpdateManyWithoutRoomsInput>
  }

  export type staff_roomsScalarWhereInput = {
    AND?: staff_roomsScalarWhereInput | staff_roomsScalarWhereInput[]
    OR?: staff_roomsScalarWhereInput[]
    NOT?: staff_roomsScalarWhereInput | staff_roomsScalarWhereInput[]
    id?: IntFilter<"staff_rooms"> | number
    staff_id?: IntFilter<"staff_rooms"> | number
    room_id?: IntFilter<"staff_rooms"> | number
    sign_in_date?: DateTimeFilter<"staff_rooms"> | Date | string
    sign_in_time?: DateTimeNullableFilter<"staff_rooms"> | Date | string | null
    sign_out_time?: DateTimeNullableFilter<"staff_rooms"> | Date | string | null
  }

  export type patientsCreateWithoutStaffInput = {
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesCreateNestedManyWithoutPatientsInput
  }

  export type patientsUncheckedCreateWithoutStaffInput = {
    id?: number
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type patientsCreateOrConnectWithoutStaffInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutStaffInput, patientsUncheckedCreateWithoutStaffInput>
  }

  export type patientsCreateManyStaffInputEnvelope = {
    data: patientsCreateManyStaffInput | patientsCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type quesCreateWithoutStaffInput = {
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients: patientsCreateNestedOneWithoutQuesInput
    rooms: roomsCreateNestedOneWithoutQuesInput
  }

  export type quesUncheckedCreateWithoutStaffInput = {
    id?: number
    patient_id: number
    room_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesCreateOrConnectWithoutStaffInput = {
    where: quesWhereUniqueInput
    create: XOR<quesCreateWithoutStaffInput, quesUncheckedCreateWithoutStaffInput>
  }

  export type quesCreateManyStaffInputEnvelope = {
    data: quesCreateManyStaffInput | quesCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type staff_roomsCreateWithoutStaffInput = {
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
    rooms: roomsCreateNestedOneWithoutStaff_roomsInput
  }

  export type staff_roomsUncheckedCreateWithoutStaffInput = {
    id?: number
    room_id: number
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
  }

  export type staff_roomsCreateOrConnectWithoutStaffInput = {
    where: staff_roomsWhereUniqueInput
    create: XOR<staff_roomsCreateWithoutStaffInput, staff_roomsUncheckedCreateWithoutStaffInput>
  }

  export type staff_roomsCreateManyStaffInputEnvelope = {
    data: staff_roomsCreateManyStaffInput | staff_roomsCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type patientsUpsertWithWhereUniqueWithoutStaffInput = {
    where: patientsWhereUniqueInput
    update: XOR<patientsUpdateWithoutStaffInput, patientsUncheckedUpdateWithoutStaffInput>
    create: XOR<patientsCreateWithoutStaffInput, patientsUncheckedCreateWithoutStaffInput>
  }

  export type patientsUpdateWithWhereUniqueWithoutStaffInput = {
    where: patientsWhereUniqueInput
    data: XOR<patientsUpdateWithoutStaffInput, patientsUncheckedUpdateWithoutStaffInput>
  }

  export type patientsUpdateManyWithWhereWithoutStaffInput = {
    where: patientsScalarWhereInput
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyWithoutStaffInput>
  }

  export type patientsScalarWhereInput = {
    AND?: patientsScalarWhereInput | patientsScalarWhereInput[]
    OR?: patientsScalarWhereInput[]
    NOT?: patientsScalarWhereInput | patientsScalarWhereInput[]
    id?: IntFilter<"patients"> | number
    full_name?: StringFilter<"patients"> | string
    address?: StringNullableFilter<"patients"> | string | null
    contact_number?: StringNullableFilter<"patients"> | string | null
    email_address?: StringNullableFilter<"patients"> | string | null
    image?: BytesNullableFilter<"patients"> | Uint8Array | null
    chronic_diagnosis?: StringNullableFilter<"patients"> | string | null
    dr_id?: IntNullableFilter<"patients"> | number | null
    created_at?: DateTimeNullableFilter<"patients"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"patients"> | Date | string | null
  }

  export type quesUpsertWithWhereUniqueWithoutStaffInput = {
    where: quesWhereUniqueInput
    update: XOR<quesUpdateWithoutStaffInput, quesUncheckedUpdateWithoutStaffInput>
    create: XOR<quesCreateWithoutStaffInput, quesUncheckedCreateWithoutStaffInput>
  }

  export type quesUpdateWithWhereUniqueWithoutStaffInput = {
    where: quesWhereUniqueInput
    data: XOR<quesUpdateWithoutStaffInput, quesUncheckedUpdateWithoutStaffInput>
  }

  export type quesUpdateManyWithWhereWithoutStaffInput = {
    where: quesScalarWhereInput
    data: XOR<quesUpdateManyMutationInput, quesUncheckedUpdateManyWithoutStaffInput>
  }

  export type staff_roomsUpsertWithWhereUniqueWithoutStaffInput = {
    where: staff_roomsWhereUniqueInput
    update: XOR<staff_roomsUpdateWithoutStaffInput, staff_roomsUncheckedUpdateWithoutStaffInput>
    create: XOR<staff_roomsCreateWithoutStaffInput, staff_roomsUncheckedCreateWithoutStaffInput>
  }

  export type staff_roomsUpdateWithWhereUniqueWithoutStaffInput = {
    where: staff_roomsWhereUniqueInput
    data: XOR<staff_roomsUpdateWithoutStaffInput, staff_roomsUncheckedUpdateWithoutStaffInput>
  }

  export type staff_roomsUpdateManyWithWhereWithoutStaffInput = {
    where: staff_roomsScalarWhereInput
    data: XOR<staff_roomsUpdateManyMutationInput, staff_roomsUncheckedUpdateManyWithoutStaffInput>
  }

  export type roomsCreateWithoutStaff_roomsInput = {
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutStaff_roomsInput = {
    id?: number
    room_number: string
    room_name?: string | null
    room_type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ques?: quesUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutStaff_roomsInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutStaff_roomsInput, roomsUncheckedCreateWithoutStaff_roomsInput>
  }

  export type staffCreateWithoutStaff_roomsInput = {
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients?: patientsCreateNestedManyWithoutStaffInput
    ques?: quesCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutStaff_roomsInput = {
    id?: number
    full_name: string
    position: $Enums.staff_position
    image?: Uint8Array | null
    years_of_service?: number | null
    monthly_wages?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    patients?: patientsUncheckedCreateNestedManyWithoutStaffInput
    ques?: quesUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutStaff_roomsInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStaff_roomsInput, staffUncheckedCreateWithoutStaff_roomsInput>
  }

  export type roomsUpsertWithoutStaff_roomsInput = {
    update: XOR<roomsUpdateWithoutStaff_roomsInput, roomsUncheckedUpdateWithoutStaff_roomsInput>
    create: XOR<roomsCreateWithoutStaff_roomsInput, roomsUncheckedCreateWithoutStaff_roomsInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutStaff_roomsInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutStaff_roomsInput, roomsUncheckedUpdateWithoutStaff_roomsInput>
  }

  export type roomsUpdateWithoutStaff_roomsInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutStaff_roomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    room_name?: NullableStringFieldUpdateOperationsInput | string | null
    room_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type staffUpsertWithoutStaff_roomsInput = {
    update: XOR<staffUpdateWithoutStaff_roomsInput, staffUncheckedUpdateWithoutStaff_roomsInput>
    create: XOR<staffCreateWithoutStaff_roomsInput, staffUncheckedCreateWithoutStaff_roomsInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutStaff_roomsInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutStaff_roomsInput, staffUncheckedUpdateWithoutStaff_roomsInput>
  }

  export type staffUpdateWithoutStaff_roomsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUpdateManyWithoutStaffNestedInput
    ques?: quesUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutStaff_roomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    position?: Enumstaff_positionFieldUpdateOperationsInput | $Enums.staff_position
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    years_of_service?: NullableIntFieldUpdateOperationsInput | number | null
    monthly_wages?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUncheckedUpdateManyWithoutStaffNestedInput
    ques?: quesUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type quesCreateManyPatientsInput = {
    id?: number
    staff_id: number
    room_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesUpdateWithoutPatientsInput = {
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneRequiredWithoutQuesNestedInput
    staff?: staffUpdateOneRequiredWithoutQuesNestedInput
  }

  export type quesUncheckedUpdateWithoutPatientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesUncheckedUpdateManyWithoutPatientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesCreateManyRoomsInput = {
    id?: number
    patient_id: number
    staff_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type staff_roomsCreateManyRoomsInput = {
    id?: number
    staff_id: number
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
  }

  export type quesUpdateWithoutRoomsInput = {
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUpdateOneRequiredWithoutQuesNestedInput
    staff?: staffUpdateOneRequiredWithoutQuesNestedInput
  }

  export type quesUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesUncheckedUpdateManyWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsUpdateWithoutRoomsInput = {
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneRequiredWithoutStaff_roomsNestedInput
  }

  export type staff_roomsUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsUncheckedUpdateManyWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patientsCreateManyStaffInput = {
    id?: number
    full_name: string
    address?: string | null
    contact_number?: string | null
    email_address?: string | null
    image?: Uint8Array | null
    chronic_diagnosis?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quesCreateManyStaffInput = {
    id?: number
    patient_id: number
    room_id: number
    queue_number: number
    status?: $Enums.que_status | null
    sign_in_time?: Date | string | null
    started_time?: Date | string | null
    completed_time?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type staff_roomsCreateManyStaffInput = {
    id?: number
    room_id: number
    sign_in_date: Date | string
    sign_in_time?: Date | string | null
    sign_out_time?: Date | string | null
  }

  export type patientsUpdateWithoutStaffInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUpdateManyWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ques?: quesUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateManyWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    chronic_diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesUpdateWithoutStaffInput = {
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: patientsUpdateOneRequiredWithoutQuesNestedInput
    rooms?: roomsUpdateOneRequiredWithoutQuesNestedInput
  }

  export type quesUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quesUncheckedUpdateManyWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    queue_number?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumque_statusFieldUpdateOperationsInput | $Enums.que_status | null
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsUpdateWithoutStaffInput = {
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneRequiredWithoutStaff_roomsNestedInput
  }

  export type staff_roomsUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staff_roomsUncheckedUpdateManyWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    sign_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sign_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sign_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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