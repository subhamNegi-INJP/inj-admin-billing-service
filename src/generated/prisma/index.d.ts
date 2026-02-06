
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
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model CouponUsage
 * 
 */
export type CouponUsage = $Result.DefaultSelection<Prisma.$CouponUsagePayload>
/**
 * Model TaxConfig
 * 
 */
export type TaxConfig = $Result.DefaultSelection<Prisma.$TaxConfigPayload>
/**
 * Model PaymentGatewayConfig
 * 
 */
export type PaymentGatewayConfig = $Result.DefaultSelection<Prisma.$PaymentGatewayConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InvoiceStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  SENT: 'SENT',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  VOID: 'VOID'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  UPI: 'UPI',
  NET_BANKING: 'NET_BANKING',
  WALLET: 'WALLET',
  CHEQUE: 'CHEQUE',
  CASH: 'CASH',
  RAZORPAY: 'RAZORPAY',
  STRIPE: 'STRIPE',
  PAYPAL: 'PAYPAL',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const CouponType: {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT',
  FREE_TRIAL: 'FREE_TRIAL',
  FIRST_MONTH_FREE: 'FIRST_MONTH_FREE'
};

export type CouponType = (typeof CouponType)[keyof typeof CouponType]


export const CouponStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED',
  EXHAUSTED: 'EXHAUSTED'
};

export type CouponStatus = (typeof CouponStatus)[keyof typeof CouponStatus]

}

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type CouponType = $Enums.CouponType

export const CouponType: typeof $Enums.CouponType

export type CouponStatus = $Enums.CouponStatus

export const CouponStatus: typeof $Enums.CouponStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Invoices
 * const invoices = await prisma.invoice.findMany()
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
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoice.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs>;

  /**
   * `prisma.couponUsage`: Exposes CRUD operations for the **CouponUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CouponUsages
    * const couponUsages = await prisma.couponUsage.findMany()
    * ```
    */
  get couponUsage(): Prisma.CouponUsageDelegate<ExtArgs>;

  /**
   * `prisma.taxConfig`: Exposes CRUD operations for the **TaxConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxConfigs
    * const taxConfigs = await prisma.taxConfig.findMany()
    * ```
    */
  get taxConfig(): Prisma.TaxConfigDelegate<ExtArgs>;

  /**
   * `prisma.paymentGatewayConfig`: Exposes CRUD operations for the **PaymentGatewayConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentGatewayConfigs
    * const paymentGatewayConfigs = await prisma.paymentGatewayConfig.findMany()
    * ```
    */
  get paymentGatewayConfig(): Prisma.PaymentGatewayConfigDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem',
    Payment: 'Payment',
    Coupon: 'Coupon',
    CouponUsage: 'CouponUsage',
    TaxConfig: 'TaxConfig',
    PaymentGatewayConfig: 'PaymentGatewayConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "invoice" | "invoiceItem" | "payment" | "coupon" | "couponUsage" | "taxConfig" | "paymentGatewayConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      CouponUsage: {
        payload: Prisma.$CouponUsagePayload<ExtArgs>
        fields: Prisma.CouponUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          findFirst: {
            args: Prisma.CouponUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          findMany: {
            args: Prisma.CouponUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>[]
          }
          create: {
            args: Prisma.CouponUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          createMany: {
            args: Prisma.CouponUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>[]
          }
          delete: {
            args: Prisma.CouponUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          update: {
            args: Prisma.CouponUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          deleteMany: {
            args: Prisma.CouponUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUsagePayload>
          }
          aggregate: {
            args: Prisma.CouponUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouponUsage>
          }
          groupBy: {
            args: Prisma.CouponUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponUsageCountArgs<ExtArgs>
            result: $Utils.Optional<CouponUsageCountAggregateOutputType> | number
          }
        }
      }
      TaxConfig: {
        payload: Prisma.$TaxConfigPayload<ExtArgs>
        fields: Prisma.TaxConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          findFirst: {
            args: Prisma.TaxConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          findMany: {
            args: Prisma.TaxConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>[]
          }
          create: {
            args: Prisma.TaxConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          createMany: {
            args: Prisma.TaxConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>[]
          }
          delete: {
            args: Prisma.TaxConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          update: {
            args: Prisma.TaxConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          deleteMany: {
            args: Prisma.TaxConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaxConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          aggregate: {
            args: Prisma.TaxConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxConfig>
          }
          groupBy: {
            args: Prisma.TaxConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TaxConfigCountAggregateOutputType> | number
          }
        }
      }
      PaymentGatewayConfig: {
        payload: Prisma.$PaymentGatewayConfigPayload<ExtArgs>
        fields: Prisma.PaymentGatewayConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentGatewayConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentGatewayConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>
          }
          findFirst: {
            args: Prisma.PaymentGatewayConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentGatewayConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>
          }
          findMany: {
            args: Prisma.PaymentGatewayConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>[]
          }
          create: {
            args: Prisma.PaymentGatewayConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>
          }
          createMany: {
            args: Prisma.PaymentGatewayConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentGatewayConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>[]
          }
          delete: {
            args: Prisma.PaymentGatewayConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>
          }
          update: {
            args: Prisma.PaymentGatewayConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>
          }
          deleteMany: {
            args: Prisma.PaymentGatewayConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentGatewayConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentGatewayConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentGatewayConfigPayload>
          }
          aggregate: {
            args: Prisma.PaymentGatewayConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentGatewayConfig>
          }
          groupBy: {
            args: Prisma.PaymentGatewayConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGatewayConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentGatewayConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentGatewayConfigCountAggregateOutputType> | number
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
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
    payments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    usages: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usages?: boolean | CouponCountOutputTypeCountUsagesArgs
  }

  // Custom InputTypes
  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponUsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponDiscount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    cgst: Decimal | null
    sgst: Decimal | null
    igst: Decimal | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balanceAmount: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponDiscount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    cgst: Decimal | null
    sgst: Decimal | null
    igst: Decimal | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balanceAmount: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    clientPhone: string | null
    clientCompany: string | null
    billingAddress: string | null
    billingCity: string | null
    billingState: string | null
    billingCountry: string | null
    billingZipCode: string | null
    gstin: string | null
    orderId: string | null
    orderNumber: string | null
    subscriptionId: string | null
    invoiceDate: Date | null
    dueDate: Date | null
    periodStart: Date | null
    periodEnd: Date | null
    status: $Enums.InvoiceStatus | null
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponId: string | null
    couponCode: string | null
    couponDiscount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    cgst: Decimal | null
    sgst: Decimal | null
    igst: Decimal | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balanceAmount: Decimal | null
    currency: string | null
    notes: string | null
    termsAndConditions: string | null
    internalNotes: string | null
    sentAt: Date | null
    sentBy: string | null
    sentByName: string | null
    paidAt: Date | null
    cancelledAt: Date | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    pdfUrl: string | null
    pdfGeneratedAt: Date | null
    createdById: string | null
    createdByName: string | null
    updatedById: string | null
    updatedByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    clientPhone: string | null
    clientCompany: string | null
    billingAddress: string | null
    billingCity: string | null
    billingState: string | null
    billingCountry: string | null
    billingZipCode: string | null
    gstin: string | null
    orderId: string | null
    orderNumber: string | null
    subscriptionId: string | null
    invoiceDate: Date | null
    dueDate: Date | null
    periodStart: Date | null
    periodEnd: Date | null
    status: $Enums.InvoiceStatus | null
    subtotal: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    couponId: string | null
    couponCode: string | null
    couponDiscount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    cgst: Decimal | null
    sgst: Decimal | null
    igst: Decimal | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balanceAmount: Decimal | null
    currency: string | null
    notes: string | null
    termsAndConditions: string | null
    internalNotes: string | null
    sentAt: Date | null
    sentBy: string | null
    sentByName: string | null
    paidAt: Date | null
    cancelledAt: Date | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    pdfUrl: string | null
    pdfGeneratedAt: Date | null
    createdById: string | null
    createdByName: string | null
    updatedById: string | null
    updatedByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    clientId: number
    clientName: number
    clientEmail: number
    clientPhone: number
    clientCompany: number
    billingAddress: number
    billingCity: number
    billingState: number
    billingCountry: number
    billingZipCode: number
    gstin: number
    orderId: number
    orderNumber: number
    subscriptionId: number
    invoiceDate: number
    dueDate: number
    periodStart: number
    periodEnd: number
    status: number
    subtotal: number
    discountPercent: number
    discountAmount: number
    couponId: number
    couponCode: number
    couponDiscount: number
    taxPercent: number
    taxAmount: number
    cgst: number
    sgst: number
    igst: number
    totalAmount: number
    paidAmount: number
    balanceAmount: number
    currency: number
    notes: number
    termsAndConditions: number
    internalNotes: number
    sentAt: number
    sentBy: number
    sentByName: number
    paidAt: number
    cancelledAt: number
    cancelReason: number
    cancelledById: number
    cancelledByName: number
    pdfUrl: number
    pdfGeneratedAt: number
    createdById: number
    createdByName: number
    updatedById: number
    updatedByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    cgst?: true
    sgst?: true
    igst?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    cgst?: true
    sgst?: true
    igst?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    clientPhone?: true
    clientCompany?: true
    billingAddress?: true
    billingCity?: true
    billingState?: true
    billingCountry?: true
    billingZipCode?: true
    gstin?: true
    orderId?: true
    orderNumber?: true
    subscriptionId?: true
    invoiceDate?: true
    dueDate?: true
    periodStart?: true
    periodEnd?: true
    status?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponId?: true
    couponCode?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    cgst?: true
    sgst?: true
    igst?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
    currency?: true
    notes?: true
    termsAndConditions?: true
    internalNotes?: true
    sentAt?: true
    sentBy?: true
    sentByName?: true
    paidAt?: true
    cancelledAt?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    pdfUrl?: true
    pdfGeneratedAt?: true
    createdById?: true
    createdByName?: true
    updatedById?: true
    updatedByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    clientPhone?: true
    clientCompany?: true
    billingAddress?: true
    billingCity?: true
    billingState?: true
    billingCountry?: true
    billingZipCode?: true
    gstin?: true
    orderId?: true
    orderNumber?: true
    subscriptionId?: true
    invoiceDate?: true
    dueDate?: true
    periodStart?: true
    periodEnd?: true
    status?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponId?: true
    couponCode?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    cgst?: true
    sgst?: true
    igst?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
    currency?: true
    notes?: true
    termsAndConditions?: true
    internalNotes?: true
    sentAt?: true
    sentBy?: true
    sentByName?: true
    paidAt?: true
    cancelledAt?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    pdfUrl?: true
    pdfGeneratedAt?: true
    createdById?: true
    createdByName?: true
    updatedById?: true
    updatedByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    clientPhone?: true
    clientCompany?: true
    billingAddress?: true
    billingCity?: true
    billingState?: true
    billingCountry?: true
    billingZipCode?: true
    gstin?: true
    orderId?: true
    orderNumber?: true
    subscriptionId?: true
    invoiceDate?: true
    dueDate?: true
    periodStart?: true
    periodEnd?: true
    status?: true
    subtotal?: true
    discountPercent?: true
    discountAmount?: true
    couponId?: true
    couponCode?: true
    couponDiscount?: true
    taxPercent?: true
    taxAmount?: true
    cgst?: true
    sgst?: true
    igst?: true
    totalAmount?: true
    paidAmount?: true
    balanceAmount?: true
    currency?: true
    notes?: true
    termsAndConditions?: true
    internalNotes?: true
    sentAt?: true
    sentBy?: true
    sentByName?: true
    paidAt?: true
    cancelledAt?: true
    cancelReason?: true
    cancelledById?: true
    cancelledByName?: true
    pdfUrl?: true
    pdfGeneratedAt?: true
    createdById?: true
    createdByName?: true
    updatedById?: true
    updatedByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail: string | null
    clientPhone: string | null
    clientCompany: string | null
    billingAddress: string | null
    billingCity: string | null
    billingState: string | null
    billingCountry: string | null
    billingZipCode: string | null
    gstin: string | null
    orderId: string | null
    orderNumber: string | null
    subscriptionId: string | null
    invoiceDate: Date
    dueDate: Date
    periodStart: Date | null
    periodEnd: Date | null
    status: $Enums.InvoiceStatus
    subtotal: Decimal
    discountPercent: Decimal
    discountAmount: Decimal
    couponId: string | null
    couponCode: string | null
    couponDiscount: Decimal
    taxPercent: Decimal
    taxAmount: Decimal
    cgst: Decimal
    sgst: Decimal
    igst: Decimal
    totalAmount: Decimal
    paidAmount: Decimal
    balanceAmount: Decimal
    currency: string
    notes: string | null
    termsAndConditions: string | null
    internalNotes: string | null
    sentAt: Date | null
    sentBy: string | null
    sentByName: string | null
    paidAt: Date | null
    cancelledAt: Date | null
    cancelReason: string | null
    cancelledById: string | null
    cancelledByName: string | null
    pdfUrl: string | null
    pdfGeneratedAt: Date | null
    createdById: string | null
    createdByName: string | null
    updatedById: string | null
    updatedByName: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    clientCompany?: boolean
    billingAddress?: boolean
    billingCity?: boolean
    billingState?: boolean
    billingCountry?: boolean
    billingZipCode?: boolean
    gstin?: boolean
    orderId?: boolean
    orderNumber?: boolean
    subscriptionId?: boolean
    invoiceDate?: boolean
    dueDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
    subtotal?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    couponId?: boolean
    couponCode?: boolean
    couponDiscount?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    cgst?: boolean
    sgst?: boolean
    igst?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    currency?: boolean
    notes?: boolean
    termsAndConditions?: boolean
    internalNotes?: boolean
    sentAt?: boolean
    sentBy?: boolean
    sentByName?: boolean
    paidAt?: boolean
    cancelledAt?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    pdfUrl?: boolean
    pdfGeneratedAt?: boolean
    createdById?: boolean
    createdByName?: boolean
    updatedById?: boolean
    updatedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    clientCompany?: boolean
    billingAddress?: boolean
    billingCity?: boolean
    billingState?: boolean
    billingCountry?: boolean
    billingZipCode?: boolean
    gstin?: boolean
    orderId?: boolean
    orderNumber?: boolean
    subscriptionId?: boolean
    invoiceDate?: boolean
    dueDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
    subtotal?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    couponId?: boolean
    couponCode?: boolean
    couponDiscount?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    cgst?: boolean
    sgst?: boolean
    igst?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    currency?: boolean
    notes?: boolean
    termsAndConditions?: boolean
    internalNotes?: boolean
    sentAt?: boolean
    sentBy?: boolean
    sentByName?: boolean
    paidAt?: boolean
    cancelledAt?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    pdfUrl?: boolean
    pdfGeneratedAt?: boolean
    createdById?: boolean
    createdByName?: boolean
    updatedById?: boolean
    updatedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    clientPhone?: boolean
    clientCompany?: boolean
    billingAddress?: boolean
    billingCity?: boolean
    billingState?: boolean
    billingCountry?: boolean
    billingZipCode?: boolean
    gstin?: boolean
    orderId?: boolean
    orderNumber?: boolean
    subscriptionId?: boolean
    invoiceDate?: boolean
    dueDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
    subtotal?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    couponId?: boolean
    couponCode?: boolean
    couponDiscount?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    cgst?: boolean
    sgst?: boolean
    igst?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balanceAmount?: boolean
    currency?: boolean
    notes?: boolean
    termsAndConditions?: boolean
    internalNotes?: boolean
    sentAt?: boolean
    sentBy?: boolean
    sentByName?: boolean
    paidAt?: boolean
    cancelledAt?: boolean
    cancelReason?: boolean
    cancelledById?: boolean
    cancelledByName?: boolean
    pdfUrl?: boolean
    pdfGeneratedAt?: boolean
    createdById?: boolean
    createdByName?: boolean
    updatedById?: boolean
    updatedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string
      clientId: string
      clientName: string
      clientEmail: string | null
      clientPhone: string | null
      clientCompany: string | null
      billingAddress: string | null
      billingCity: string | null
      billingState: string | null
      billingCountry: string | null
      billingZipCode: string | null
      gstin: string | null
      orderId: string | null
      orderNumber: string | null
      subscriptionId: string | null
      invoiceDate: Date
      dueDate: Date
      periodStart: Date | null
      periodEnd: Date | null
      status: $Enums.InvoiceStatus
      subtotal: Prisma.Decimal
      discountPercent: Prisma.Decimal
      discountAmount: Prisma.Decimal
      couponId: string | null
      couponCode: string | null
      couponDiscount: Prisma.Decimal
      taxPercent: Prisma.Decimal
      taxAmount: Prisma.Decimal
      cgst: Prisma.Decimal
      sgst: Prisma.Decimal
      igst: Prisma.Decimal
      totalAmount: Prisma.Decimal
      paidAmount: Prisma.Decimal
      balanceAmount: Prisma.Decimal
      currency: string
      notes: string | null
      termsAndConditions: string | null
      internalNotes: string | null
      sentAt: Date | null
      sentBy: string | null
      sentByName: string | null
      paidAt: Date | null
      cancelledAt: Date | null
      cancelReason: string | null
      cancelledById: string | null
      cancelledByName: string | null
      pdfUrl: string | null
      pdfGeneratedAt: Date | null
      createdById: string | null
      createdByName: string | null
      updatedById: string | null
      updatedByName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly clientId: FieldRef<"Invoice", 'String'>
    readonly clientName: FieldRef<"Invoice", 'String'>
    readonly clientEmail: FieldRef<"Invoice", 'String'>
    readonly clientPhone: FieldRef<"Invoice", 'String'>
    readonly clientCompany: FieldRef<"Invoice", 'String'>
    readonly billingAddress: FieldRef<"Invoice", 'String'>
    readonly billingCity: FieldRef<"Invoice", 'String'>
    readonly billingState: FieldRef<"Invoice", 'String'>
    readonly billingCountry: FieldRef<"Invoice", 'String'>
    readonly billingZipCode: FieldRef<"Invoice", 'String'>
    readonly gstin: FieldRef<"Invoice", 'String'>
    readonly orderId: FieldRef<"Invoice", 'String'>
    readonly orderNumber: FieldRef<"Invoice", 'String'>
    readonly subscriptionId: FieldRef<"Invoice", 'String'>
    readonly invoiceDate: FieldRef<"Invoice", 'DateTime'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly periodStart: FieldRef<"Invoice", 'DateTime'>
    readonly periodEnd: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly subtotal: FieldRef<"Invoice", 'Decimal'>
    readonly discountPercent: FieldRef<"Invoice", 'Decimal'>
    readonly discountAmount: FieldRef<"Invoice", 'Decimal'>
    readonly couponId: FieldRef<"Invoice", 'String'>
    readonly couponCode: FieldRef<"Invoice", 'String'>
    readonly couponDiscount: FieldRef<"Invoice", 'Decimal'>
    readonly taxPercent: FieldRef<"Invoice", 'Decimal'>
    readonly taxAmount: FieldRef<"Invoice", 'Decimal'>
    readonly cgst: FieldRef<"Invoice", 'Decimal'>
    readonly sgst: FieldRef<"Invoice", 'Decimal'>
    readonly igst: FieldRef<"Invoice", 'Decimal'>
    readonly totalAmount: FieldRef<"Invoice", 'Decimal'>
    readonly paidAmount: FieldRef<"Invoice", 'Decimal'>
    readonly balanceAmount: FieldRef<"Invoice", 'Decimal'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly termsAndConditions: FieldRef<"Invoice", 'String'>
    readonly internalNotes: FieldRef<"Invoice", 'String'>
    readonly sentAt: FieldRef<"Invoice", 'DateTime'>
    readonly sentBy: FieldRef<"Invoice", 'String'>
    readonly sentByName: FieldRef<"Invoice", 'String'>
    readonly paidAt: FieldRef<"Invoice", 'DateTime'>
    readonly cancelledAt: FieldRef<"Invoice", 'DateTime'>
    readonly cancelReason: FieldRef<"Invoice", 'String'>
    readonly cancelledById: FieldRef<"Invoice", 'String'>
    readonly cancelledByName: FieldRef<"Invoice", 'String'>
    readonly pdfUrl: FieldRef<"Invoice", 'String'>
    readonly pdfGeneratedAt: FieldRef<"Invoice", 'DateTime'>
    readonly createdById: FieldRef<"Invoice", 'String'>
    readonly createdByName: FieldRef<"Invoice", 'String'>
    readonly updatedById: FieldRef<"Invoice", 'String'>
    readonly updatedByName: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    subtotal: Decimal | null
    total: Decimal | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    subtotal: Decimal | null
    total: Decimal | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    subtotal: Decimal | null
    total: Decimal | null
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    discountPercent: Decimal | null
    discountAmount: Decimal | null
    taxPercent: Decimal | null
    taxAmount: Decimal | null
    subtotal: Decimal | null
    total: Decimal | null
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    productId: number
    productName: number
    productCode: number
    licenseTypeId: number
    licenseTypeName: number
    description: number
    quantity: number
    unitPrice: number
    discountPercent: number
    discountAmount: number
    taxPercent: number
    taxAmount: number
    subtotal: number
    total: number
    periodStart: number
    periodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    discountPercent?: true
    discountAmount?: true
    taxPercent?: true
    taxAmount?: true
    subtotal?: true
    total?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    discountPercent?: true
    discountAmount?: true
    taxPercent?: true
    taxAmount?: true
    subtotal?: true
    total?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    description?: true
    quantity?: true
    unitPrice?: true
    discountPercent?: true
    discountAmount?: true
    taxPercent?: true
    taxAmount?: true
    subtotal?: true
    total?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    description?: true
    quantity?: true
    unitPrice?: true
    discountPercent?: true
    discountAmount?: true
    taxPercent?: true
    taxAmount?: true
    subtotal?: true
    total?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    description?: true
    quantity?: true
    unitPrice?: true
    discountPercent?: true
    discountAmount?: true
    taxPercent?: true
    taxAmount?: true
    subtotal?: true
    total?: true
    periodStart?: true
    periodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    id: string
    invoiceId: string
    productId: string | null
    productName: string
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    description: string | null
    quantity: number
    unitPrice: Decimal
    discountPercent: Decimal
    discountAmount: Decimal
    taxPercent: Decimal
    taxAmount: Decimal
    subtotal: Decimal
    total: Decimal
    periodStart: Date | null
    periodEnd: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    subtotal?: boolean
    total?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    subtotal?: boolean
    total?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discountPercent?: boolean
    discountAmount?: boolean
    taxPercent?: boolean
    taxAmount?: boolean
    subtotal?: boolean
    total?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      productId: string | null
      productName: string
      productCode: string | null
      licenseTypeId: string | null
      licenseTypeName: string | null
      description: string | null
      quantity: number
      unitPrice: Prisma.Decimal
      discountPercent: Prisma.Decimal
      discountAmount: Prisma.Decimal
      taxPercent: Prisma.Decimal
      taxAmount: Prisma.Decimal
      subtotal: Prisma.Decimal
      total: Prisma.Decimal
      periodStart: Date | null
      periodEnd: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the InvoiceItem model
   */ 
  interface InvoiceItemFieldRefs {
    readonly id: FieldRef<"InvoiceItem", 'String'>
    readonly invoiceId: FieldRef<"InvoiceItem", 'String'>
    readonly productId: FieldRef<"InvoiceItem", 'String'>
    readonly productName: FieldRef<"InvoiceItem", 'String'>
    readonly productCode: FieldRef<"InvoiceItem", 'String'>
    readonly licenseTypeId: FieldRef<"InvoiceItem", 'String'>
    readonly licenseTypeName: FieldRef<"InvoiceItem", 'String'>
    readonly description: FieldRef<"InvoiceItem", 'String'>
    readonly quantity: FieldRef<"InvoiceItem", 'Int'>
    readonly unitPrice: FieldRef<"InvoiceItem", 'Decimal'>
    readonly discountPercent: FieldRef<"InvoiceItem", 'Decimal'>
    readonly discountAmount: FieldRef<"InvoiceItem", 'Decimal'>
    readonly taxPercent: FieldRef<"InvoiceItem", 'Decimal'>
    readonly taxAmount: FieldRef<"InvoiceItem", 'Decimal'>
    readonly subtotal: FieldRef<"InvoiceItem", 'Decimal'>
    readonly total: FieldRef<"InvoiceItem", 'Decimal'>
    readonly periodStart: FieldRef<"InvoiceItem", 'DateTime'>
    readonly periodEnd: FieldRef<"InvoiceItem", 'DateTime'>
    readonly createdAt: FieldRef<"InvoiceItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InvoiceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
    refundedAmount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
    refundedAmount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    paymentNumber: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    invoiceId: string | null
    orderId: string | null
    subscriptionId: string | null
    amount: Decimal | null
    currency: string | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    gatewayName: string | null
    gatewayTxnId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    bankName: string | null
    bankAccount: string | null
    bankReference: string | null
    chequeNumber: string | null
    chequeDate: Date | null
    chequeBank: string | null
    refundedAmount: Decimal | null
    refundReason: string | null
    refundedAt: Date | null
    refundedById: string | null
    refundedByName: string | null
    processedAt: Date | null
    processedById: string | null
    processedByName: string | null
    failureReason: string | null
    failureCode: string | null
    notes: string | null
    internalNotes: string | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    paymentNumber: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    invoiceId: string | null
    orderId: string | null
    subscriptionId: string | null
    amount: Decimal | null
    currency: string | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    gatewayName: string | null
    gatewayTxnId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    bankName: string | null
    bankAccount: string | null
    bankReference: string | null
    chequeNumber: string | null
    chequeDate: Date | null
    chequeBank: string | null
    refundedAmount: Decimal | null
    refundReason: string | null
    refundedAt: Date | null
    refundedById: string | null
    refundedByName: string | null
    processedAt: Date | null
    processedById: string | null
    processedByName: string | null
    failureReason: string | null
    failureCode: string | null
    notes: string | null
    internalNotes: string | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    paymentNumber: number
    clientId: number
    clientName: number
    clientEmail: number
    invoiceId: number
    orderId: number
    subscriptionId: number
    amount: number
    currency: number
    method: number
    status: number
    gatewayName: number
    gatewayTxnId: number
    gatewayOrderId: number
    gatewayPaymentId: number
    gatewayResponse: number
    bankName: number
    bankAccount: number
    bankReference: number
    chequeNumber: number
    chequeDate: number
    chequeBank: number
    refundedAmount: number
    refundReason: number
    refundedAt: number
    refundedById: number
    refundedByName: number
    processedAt: number
    processedById: number
    processedByName: number
    failureReason: number
    failureCode: number
    notes: number
    internalNotes: number
    createdById: number
    createdByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    refundedAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    refundedAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    paymentNumber?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    invoiceId?: true
    orderId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    gatewayName?: true
    gatewayTxnId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    bankName?: true
    bankAccount?: true
    bankReference?: true
    chequeNumber?: true
    chequeDate?: true
    chequeBank?: true
    refundedAmount?: true
    refundReason?: true
    refundedAt?: true
    refundedById?: true
    refundedByName?: true
    processedAt?: true
    processedById?: true
    processedByName?: true
    failureReason?: true
    failureCode?: true
    notes?: true
    internalNotes?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    paymentNumber?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    invoiceId?: true
    orderId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    gatewayName?: true
    gatewayTxnId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    bankName?: true
    bankAccount?: true
    bankReference?: true
    chequeNumber?: true
    chequeDate?: true
    chequeBank?: true
    refundedAmount?: true
    refundReason?: true
    refundedAt?: true
    refundedById?: true
    refundedByName?: true
    processedAt?: true
    processedById?: true
    processedByName?: true
    failureReason?: true
    failureCode?: true
    notes?: true
    internalNotes?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    paymentNumber?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    invoiceId?: true
    orderId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    gatewayName?: true
    gatewayTxnId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    gatewayResponse?: true
    bankName?: true
    bankAccount?: true
    bankReference?: true
    chequeNumber?: true
    chequeDate?: true
    chequeBank?: true
    refundedAmount?: true
    refundReason?: true
    refundedAt?: true
    refundedById?: true
    refundedByName?: true
    processedAt?: true
    processedById?: true
    processedByName?: true
    failureReason?: true
    failureCode?: true
    notes?: true
    internalNotes?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail: string | null
    invoiceId: string | null
    orderId: string | null
    subscriptionId: string | null
    amount: Decimal
    currency: string
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    gatewayName: string | null
    gatewayTxnId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    gatewayResponse: JsonValue | null
    bankName: string | null
    bankAccount: string | null
    bankReference: string | null
    chequeNumber: string | null
    chequeDate: Date | null
    chequeBank: string | null
    refundedAmount: Decimal
    refundReason: string | null
    refundedAt: Date | null
    refundedById: string | null
    refundedByName: string | null
    processedAt: Date | null
    processedById: string | null
    processedByName: string | null
    failureReason: string | null
    failureCode: string | null
    notes: string | null
    internalNotes: string | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentNumber?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    invoiceId?: boolean
    orderId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    gatewayName?: boolean
    gatewayTxnId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    bankName?: boolean
    bankAccount?: boolean
    bankReference?: boolean
    chequeNumber?: boolean
    chequeDate?: boolean
    chequeBank?: boolean
    refundedAmount?: boolean
    refundReason?: boolean
    refundedAt?: boolean
    refundedById?: boolean
    refundedByName?: boolean
    processedAt?: boolean
    processedById?: boolean
    processedByName?: boolean
    failureReason?: boolean
    failureCode?: boolean
    notes?: boolean
    internalNotes?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | Payment$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentNumber?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    invoiceId?: boolean
    orderId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    gatewayName?: boolean
    gatewayTxnId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    bankName?: boolean
    bankAccount?: boolean
    bankReference?: boolean
    chequeNumber?: boolean
    chequeDate?: boolean
    chequeBank?: boolean
    refundedAmount?: boolean
    refundReason?: boolean
    refundedAt?: boolean
    refundedById?: boolean
    refundedByName?: boolean
    processedAt?: boolean
    processedById?: boolean
    processedByName?: boolean
    failureReason?: boolean
    failureCode?: boolean
    notes?: boolean
    internalNotes?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | Payment$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    paymentNumber?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    invoiceId?: boolean
    orderId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    gatewayName?: boolean
    gatewayTxnId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    bankName?: boolean
    bankAccount?: boolean
    bankReference?: boolean
    chequeNumber?: boolean
    chequeDate?: boolean
    chequeBank?: boolean
    refundedAmount?: boolean
    refundReason?: boolean
    refundedAt?: boolean
    refundedById?: boolean
    refundedByName?: boolean
    processedAt?: boolean
    processedById?: boolean
    processedByName?: boolean
    failureReason?: boolean
    failureCode?: boolean
    notes?: boolean
    internalNotes?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | Payment$invoiceArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | Payment$invoiceArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentNumber: string
      clientId: string
      clientName: string
      clientEmail: string | null
      invoiceId: string | null
      orderId: string | null
      subscriptionId: string | null
      amount: Prisma.Decimal
      currency: string
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      gatewayName: string | null
      gatewayTxnId: string | null
      gatewayOrderId: string | null
      gatewayPaymentId: string | null
      gatewayResponse: Prisma.JsonValue | null
      bankName: string | null
      bankAccount: string | null
      bankReference: string | null
      chequeNumber: string | null
      chequeDate: Date | null
      chequeBank: string | null
      refundedAmount: Prisma.Decimal
      refundReason: string | null
      refundedAt: Date | null
      refundedById: string | null
      refundedByName: string | null
      processedAt: Date | null
      processedById: string | null
      processedByName: string | null
      failureReason: string | null
      failureCode: string | null
      notes: string | null
      internalNotes: string | null
      createdById: string | null
      createdByName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends Payment$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Payment$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly paymentNumber: FieldRef<"Payment", 'String'>
    readonly clientId: FieldRef<"Payment", 'String'>
    readonly clientName: FieldRef<"Payment", 'String'>
    readonly clientEmail: FieldRef<"Payment", 'String'>
    readonly invoiceId: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly subscriptionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly gatewayName: FieldRef<"Payment", 'String'>
    readonly gatewayTxnId: FieldRef<"Payment", 'String'>
    readonly gatewayOrderId: FieldRef<"Payment", 'String'>
    readonly gatewayPaymentId: FieldRef<"Payment", 'String'>
    readonly gatewayResponse: FieldRef<"Payment", 'Json'>
    readonly bankName: FieldRef<"Payment", 'String'>
    readonly bankAccount: FieldRef<"Payment", 'String'>
    readonly bankReference: FieldRef<"Payment", 'String'>
    readonly chequeNumber: FieldRef<"Payment", 'String'>
    readonly chequeDate: FieldRef<"Payment", 'DateTime'>
    readonly chequeBank: FieldRef<"Payment", 'String'>
    readonly refundedAmount: FieldRef<"Payment", 'Decimal'>
    readonly refundReason: FieldRef<"Payment", 'String'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly refundedById: FieldRef<"Payment", 'String'>
    readonly refundedByName: FieldRef<"Payment", 'String'>
    readonly processedAt: FieldRef<"Payment", 'DateTime'>
    readonly processedById: FieldRef<"Payment", 'String'>
    readonly processedByName: FieldRef<"Payment", 'String'>
    readonly failureReason: FieldRef<"Payment", 'String'>
    readonly failureCode: FieldRef<"Payment", 'String'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly internalNotes: FieldRef<"Payment", 'String'>
    readonly createdById: FieldRef<"Payment", 'String'>
    readonly createdByName: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment.invoice
   */
  export type Payment$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    value: Decimal | null
    maxDiscount: Decimal | null
    minOrderAmount: Decimal | null
    maxUses: number | null
    maxUsesPerClient: number | null
    currentUses: number | null
  }

  export type CouponSumAggregateOutputType = {
    value: Decimal | null
    maxDiscount: Decimal | null
    minOrderAmount: Decimal | null
    maxUses: number | null
    maxUsesPerClient: number | null
    currentUses: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    type: $Enums.CouponType | null
    value: Decimal | null
    maxDiscount: Decimal | null
    minOrderAmount: Decimal | null
    status: $Enums.CouponStatus | null
    startDate: Date | null
    endDate: Date | null
    maxUses: number | null
    maxUsesPerClient: number | null
    currentUses: number | null
    isFirstPurchaseOnly: boolean | null
    isRenewalApplicable: boolean | null
    isStackable: boolean | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    type: $Enums.CouponType | null
    value: Decimal | null
    maxDiscount: Decimal | null
    minOrderAmount: Decimal | null
    status: $Enums.CouponStatus | null
    startDate: Date | null
    endDate: Date | null
    maxUses: number | null
    maxUsesPerClient: number | null
    currentUses: number | null
    isFirstPurchaseOnly: boolean | null
    isRenewalApplicable: boolean | null
    isStackable: boolean | null
    createdById: string | null
    createdByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    type: number
    value: number
    maxDiscount: number
    minOrderAmount: number
    status: number
    startDate: number
    endDate: number
    maxUses: number
    maxUsesPerClient: number
    currentUses: number
    applicableProducts: number
    applicableLicenseTypes: number
    applicableClients: number
    isFirstPurchaseOnly: number
    isRenewalApplicable: number
    isStackable: number
    createdById: number
    createdByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    value?: true
    maxDiscount?: true
    minOrderAmount?: true
    maxUses?: true
    maxUsesPerClient?: true
    currentUses?: true
  }

  export type CouponSumAggregateInputType = {
    value?: true
    maxDiscount?: true
    minOrderAmount?: true
    maxUses?: true
    maxUsesPerClient?: true
    currentUses?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    type?: true
    value?: true
    maxDiscount?: true
    minOrderAmount?: true
    status?: true
    startDate?: true
    endDate?: true
    maxUses?: true
    maxUsesPerClient?: true
    currentUses?: true
    isFirstPurchaseOnly?: true
    isRenewalApplicable?: true
    isStackable?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    type?: true
    value?: true
    maxDiscount?: true
    minOrderAmount?: true
    status?: true
    startDate?: true
    endDate?: true
    maxUses?: true
    maxUsesPerClient?: true
    currentUses?: true
    isFirstPurchaseOnly?: true
    isRenewalApplicable?: true
    isStackable?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    type?: true
    value?: true
    maxDiscount?: true
    minOrderAmount?: true
    status?: true
    startDate?: true
    endDate?: true
    maxUses?: true
    maxUsesPerClient?: true
    currentUses?: true
    applicableProducts?: true
    applicableLicenseTypes?: true
    applicableClients?: true
    isFirstPurchaseOnly?: true
    isRenewalApplicable?: true
    isStackable?: true
    createdById?: true
    createdByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    type: $Enums.CouponType
    value: Decimal
    maxDiscount: Decimal | null
    minOrderAmount: Decimal | null
    status: $Enums.CouponStatus
    startDate: Date
    endDate: Date | null
    maxUses: number | null
    maxUsesPerClient: number | null
    currentUses: number
    applicableProducts: string[]
    applicableLicenseTypes: string[]
    applicableClients: string[]
    isFirstPurchaseOnly: boolean
    isRenewalApplicable: boolean
    isStackable: boolean
    createdById: string | null
    createdByName: string | null
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    maxDiscount?: boolean
    minOrderAmount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    maxUses?: boolean
    maxUsesPerClient?: boolean
    currentUses?: boolean
    applicableProducts?: boolean
    applicableLicenseTypes?: boolean
    applicableClients?: boolean
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usages?: boolean | Coupon$usagesArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    maxDiscount?: boolean
    minOrderAmount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    maxUses?: boolean
    maxUsesPerClient?: boolean
    currentUses?: boolean
    applicableProducts?: boolean
    applicableLicenseTypes?: boolean
    applicableClients?: boolean
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    maxDiscount?: boolean
    minOrderAmount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    maxUses?: boolean
    maxUsesPerClient?: boolean
    currentUses?: boolean
    applicableProducts?: boolean
    applicableLicenseTypes?: boolean
    applicableClients?: boolean
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: boolean
    createdByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usages?: boolean | Coupon$usagesArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      usages: Prisma.$CouponUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      type: $Enums.CouponType
      value: Prisma.Decimal
      maxDiscount: Prisma.Decimal | null
      minOrderAmount: Prisma.Decimal | null
      status: $Enums.CouponStatus
      startDate: Date
      endDate: Date | null
      maxUses: number | null
      maxUsesPerClient: number | null
      currentUses: number
      applicableProducts: string[]
      applicableLicenseTypes: string[]
      applicableClients: string[]
      isFirstPurchaseOnly: boolean
      isRenewalApplicable: boolean
      isStackable: boolean
      createdById: string | null
      createdByName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usages<T extends Coupon$usagesArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Coupon model
   */ 
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly name: FieldRef<"Coupon", 'String'>
    readonly description: FieldRef<"Coupon", 'String'>
    readonly type: FieldRef<"Coupon", 'CouponType'>
    readonly value: FieldRef<"Coupon", 'Decimal'>
    readonly maxDiscount: FieldRef<"Coupon", 'Decimal'>
    readonly minOrderAmount: FieldRef<"Coupon", 'Decimal'>
    readonly status: FieldRef<"Coupon", 'CouponStatus'>
    readonly startDate: FieldRef<"Coupon", 'DateTime'>
    readonly endDate: FieldRef<"Coupon", 'DateTime'>
    readonly maxUses: FieldRef<"Coupon", 'Int'>
    readonly maxUsesPerClient: FieldRef<"Coupon", 'Int'>
    readonly currentUses: FieldRef<"Coupon", 'Int'>
    readonly applicableProducts: FieldRef<"Coupon", 'String[]'>
    readonly applicableLicenseTypes: FieldRef<"Coupon", 'String[]'>
    readonly applicableClients: FieldRef<"Coupon", 'String[]'>
    readonly isFirstPurchaseOnly: FieldRef<"Coupon", 'Boolean'>
    readonly isRenewalApplicable: FieldRef<"Coupon", 'Boolean'>
    readonly isStackable: FieldRef<"Coupon", 'Boolean'>
    readonly createdById: FieldRef<"Coupon", 'String'>
    readonly createdByName: FieldRef<"Coupon", 'String'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
  }

  /**
   * Coupon.usages
   */
  export type Coupon$usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    where?: CouponUsageWhereInput
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    cursor?: CouponUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model CouponUsage
   */

  export type AggregateCouponUsage = {
    _count: CouponUsageCountAggregateOutputType | null
    _avg: CouponUsageAvgAggregateOutputType | null
    _sum: CouponUsageSumAggregateOutputType | null
    _min: CouponUsageMinAggregateOutputType | null
    _max: CouponUsageMaxAggregateOutputType | null
  }

  export type CouponUsageAvgAggregateOutputType = {
    discountAmount: Decimal | null
  }

  export type CouponUsageSumAggregateOutputType = {
    discountAmount: Decimal | null
  }

  export type CouponUsageMinAggregateOutputType = {
    id: string | null
    couponId: string | null
    clientId: string | null
    clientName: string | null
    orderId: string | null
    invoiceId: string | null
    subscriptionId: string | null
    discountAmount: Decimal | null
    usedAt: Date | null
  }

  export type CouponUsageMaxAggregateOutputType = {
    id: string | null
    couponId: string | null
    clientId: string | null
    clientName: string | null
    orderId: string | null
    invoiceId: string | null
    subscriptionId: string | null
    discountAmount: Decimal | null
    usedAt: Date | null
  }

  export type CouponUsageCountAggregateOutputType = {
    id: number
    couponId: number
    clientId: number
    clientName: number
    orderId: number
    invoiceId: number
    subscriptionId: number
    discountAmount: number
    usedAt: number
    _all: number
  }


  export type CouponUsageAvgAggregateInputType = {
    discountAmount?: true
  }

  export type CouponUsageSumAggregateInputType = {
    discountAmount?: true
  }

  export type CouponUsageMinAggregateInputType = {
    id?: true
    couponId?: true
    clientId?: true
    clientName?: true
    orderId?: true
    invoiceId?: true
    subscriptionId?: true
    discountAmount?: true
    usedAt?: true
  }

  export type CouponUsageMaxAggregateInputType = {
    id?: true
    couponId?: true
    clientId?: true
    clientName?: true
    orderId?: true
    invoiceId?: true
    subscriptionId?: true
    discountAmount?: true
    usedAt?: true
  }

  export type CouponUsageCountAggregateInputType = {
    id?: true
    couponId?: true
    clientId?: true
    clientName?: true
    orderId?: true
    invoiceId?: true
    subscriptionId?: true
    discountAmount?: true
    usedAt?: true
    _all?: true
  }

  export type CouponUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponUsage to aggregate.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CouponUsages
    **/
    _count?: true | CouponUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponUsageMaxAggregateInputType
  }

  export type GetCouponUsageAggregateType<T extends CouponUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponUsage[P]>
      : GetScalarType<T[P], AggregateCouponUsage[P]>
  }




  export type CouponUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponUsageWhereInput
    orderBy?: CouponUsageOrderByWithAggregationInput | CouponUsageOrderByWithAggregationInput[]
    by: CouponUsageScalarFieldEnum[] | CouponUsageScalarFieldEnum
    having?: CouponUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponUsageCountAggregateInputType | true
    _avg?: CouponUsageAvgAggregateInputType
    _sum?: CouponUsageSumAggregateInputType
    _min?: CouponUsageMinAggregateInputType
    _max?: CouponUsageMaxAggregateInputType
  }

  export type CouponUsageGroupByOutputType = {
    id: string
    couponId: string
    clientId: string
    clientName: string
    orderId: string | null
    invoiceId: string | null
    subscriptionId: string | null
    discountAmount: Decimal
    usedAt: Date
    _count: CouponUsageCountAggregateOutputType | null
    _avg: CouponUsageAvgAggregateOutputType | null
    _sum: CouponUsageSumAggregateOutputType | null
    _min: CouponUsageMinAggregateOutputType | null
    _max: CouponUsageMaxAggregateOutputType | null
  }

  type GetCouponUsageGroupByPayload<T extends CouponUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponUsageGroupByOutputType[P]>
            : GetScalarType<T[P], CouponUsageGroupByOutputType[P]>
        }
      >
    >


  export type CouponUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    couponId?: boolean
    clientId?: boolean
    clientName?: boolean
    orderId?: boolean
    invoiceId?: boolean
    subscriptionId?: boolean
    discountAmount?: boolean
    usedAt?: boolean
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponUsage"]>

  export type CouponUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    couponId?: boolean
    clientId?: boolean
    clientName?: boolean
    orderId?: boolean
    invoiceId?: boolean
    subscriptionId?: boolean
    discountAmount?: boolean
    usedAt?: boolean
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponUsage"]>

  export type CouponUsageSelectScalar = {
    id?: boolean
    couponId?: boolean
    clientId?: boolean
    clientName?: boolean
    orderId?: boolean
    invoiceId?: boolean
    subscriptionId?: boolean
    discountAmount?: boolean
    usedAt?: boolean
  }

  export type CouponUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }
  export type CouponUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }

  export type $CouponUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CouponUsage"
    objects: {
      coupon: Prisma.$CouponPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      couponId: string
      clientId: string
      clientName: string
      orderId: string | null
      invoiceId: string | null
      subscriptionId: string | null
      discountAmount: Prisma.Decimal
      usedAt: Date
    }, ExtArgs["result"]["couponUsage"]>
    composites: {}
  }

  type CouponUsageGetPayload<S extends boolean | null | undefined | CouponUsageDefaultArgs> = $Result.GetResult<Prisma.$CouponUsagePayload, S>

  type CouponUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CouponUsageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CouponUsageCountAggregateInputType | true
    }

  export interface CouponUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CouponUsage'], meta: { name: 'CouponUsage' } }
    /**
     * Find zero or one CouponUsage that matches the filter.
     * @param {CouponUsageFindUniqueArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponUsageFindUniqueArgs>(args: SelectSubset<T, CouponUsageFindUniqueArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CouponUsage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CouponUsageFindUniqueOrThrowArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CouponUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageFindFirstArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponUsageFindFirstArgs>(args?: SelectSubset<T, CouponUsageFindFirstArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CouponUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageFindFirstOrThrowArgs} args - Arguments to find a CouponUsage
     * @example
     * // Get one CouponUsage
     * const couponUsage = await prisma.couponUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CouponUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CouponUsages
     * const couponUsages = await prisma.couponUsage.findMany()
     * 
     * // Get first 10 CouponUsages
     * const couponUsages = await prisma.couponUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponUsageWithIdOnly = await prisma.couponUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponUsageFindManyArgs>(args?: SelectSubset<T, CouponUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CouponUsage.
     * @param {CouponUsageCreateArgs} args - Arguments to create a CouponUsage.
     * @example
     * // Create one CouponUsage
     * const CouponUsage = await prisma.couponUsage.create({
     *   data: {
     *     // ... data to create a CouponUsage
     *   }
     * })
     * 
     */
    create<T extends CouponUsageCreateArgs>(args: SelectSubset<T, CouponUsageCreateArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CouponUsages.
     * @param {CouponUsageCreateManyArgs} args - Arguments to create many CouponUsages.
     * @example
     * // Create many CouponUsages
     * const couponUsage = await prisma.couponUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponUsageCreateManyArgs>(args?: SelectSubset<T, CouponUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CouponUsages and returns the data saved in the database.
     * @param {CouponUsageCreateManyAndReturnArgs} args - Arguments to create many CouponUsages.
     * @example
     * // Create many CouponUsages
     * const couponUsage = await prisma.couponUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CouponUsages and only return the `id`
     * const couponUsageWithIdOnly = await prisma.couponUsage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CouponUsage.
     * @param {CouponUsageDeleteArgs} args - Arguments to delete one CouponUsage.
     * @example
     * // Delete one CouponUsage
     * const CouponUsage = await prisma.couponUsage.delete({
     *   where: {
     *     // ... filter to delete one CouponUsage
     *   }
     * })
     * 
     */
    delete<T extends CouponUsageDeleteArgs>(args: SelectSubset<T, CouponUsageDeleteArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CouponUsage.
     * @param {CouponUsageUpdateArgs} args - Arguments to update one CouponUsage.
     * @example
     * // Update one CouponUsage
     * const couponUsage = await prisma.couponUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUsageUpdateArgs>(args: SelectSubset<T, CouponUsageUpdateArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CouponUsages.
     * @param {CouponUsageDeleteManyArgs} args - Arguments to filter CouponUsages to delete.
     * @example
     * // Delete a few CouponUsages
     * const { count } = await prisma.couponUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponUsageDeleteManyArgs>(args?: SelectSubset<T, CouponUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CouponUsages
     * const couponUsage = await prisma.couponUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUsageUpdateManyArgs>(args: SelectSubset<T, CouponUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CouponUsage.
     * @param {CouponUsageUpsertArgs} args - Arguments to update or create a CouponUsage.
     * @example
     * // Update or create a CouponUsage
     * const couponUsage = await prisma.couponUsage.upsert({
     *   create: {
     *     // ... data to create a CouponUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CouponUsage we want to update
     *   }
     * })
     */
    upsert<T extends CouponUsageUpsertArgs>(args: SelectSubset<T, CouponUsageUpsertArgs<ExtArgs>>): Prisma__CouponUsageClient<$Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CouponUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageCountArgs} args - Arguments to filter CouponUsages to count.
     * @example
     * // Count the number of CouponUsages
     * const count = await prisma.couponUsage.count({
     *   where: {
     *     // ... the filter for the CouponUsages we want to count
     *   }
     * })
    **/
    count<T extends CouponUsageCountArgs>(
      args?: Subset<T, CouponUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CouponUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponUsageAggregateArgs>(args: Subset<T, CouponUsageAggregateArgs>): Prisma.PrismaPromise<GetCouponUsageAggregateType<T>>

    /**
     * Group by CouponUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUsageGroupByArgs} args - Group by arguments.
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
      T extends CouponUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponUsageGroupByArgs['orderBy'] }
        : { orderBy?: CouponUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CouponUsage model
   */
  readonly fields: CouponUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CouponUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coupon<T extends CouponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CouponDefaultArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CouponUsage model
   */ 
  interface CouponUsageFieldRefs {
    readonly id: FieldRef<"CouponUsage", 'String'>
    readonly couponId: FieldRef<"CouponUsage", 'String'>
    readonly clientId: FieldRef<"CouponUsage", 'String'>
    readonly clientName: FieldRef<"CouponUsage", 'String'>
    readonly orderId: FieldRef<"CouponUsage", 'String'>
    readonly invoiceId: FieldRef<"CouponUsage", 'String'>
    readonly subscriptionId: FieldRef<"CouponUsage", 'String'>
    readonly discountAmount: FieldRef<"CouponUsage", 'Decimal'>
    readonly usedAt: FieldRef<"CouponUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CouponUsage findUnique
   */
  export type CouponUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage findUniqueOrThrow
   */
  export type CouponUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage findFirst
   */
  export type CouponUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponUsages.
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsages.
     */
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * CouponUsage findFirstOrThrow
   */
  export type CouponUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * Filter, which CouponUsage to fetch.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponUsages.
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsages.
     */
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * CouponUsage findMany
   */
  export type CouponUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * Filter, which CouponUsages to fetch.
     */
    where?: CouponUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsages to fetch.
     */
    orderBy?: CouponUsageOrderByWithRelationInput | CouponUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CouponUsages.
     */
    cursor?: CouponUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsages.
     */
    skip?: number
    distinct?: CouponUsageScalarFieldEnum | CouponUsageScalarFieldEnum[]
  }

  /**
   * CouponUsage create
   */
  export type CouponUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a CouponUsage.
     */
    data: XOR<CouponUsageCreateInput, CouponUsageUncheckedCreateInput>
  }

  /**
   * CouponUsage createMany
   */
  export type CouponUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CouponUsages.
     */
    data: CouponUsageCreateManyInput | CouponUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CouponUsage createManyAndReturn
   */
  export type CouponUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CouponUsages.
     */
    data: CouponUsageCreateManyInput | CouponUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CouponUsage update
   */
  export type CouponUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a CouponUsage.
     */
    data: XOR<CouponUsageUpdateInput, CouponUsageUncheckedUpdateInput>
    /**
     * Choose, which CouponUsage to update.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage updateMany
   */
  export type CouponUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CouponUsages.
     */
    data: XOR<CouponUsageUpdateManyMutationInput, CouponUsageUncheckedUpdateManyInput>
    /**
     * Filter which CouponUsages to update
     */
    where?: CouponUsageWhereInput
  }

  /**
   * CouponUsage upsert
   */
  export type CouponUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the CouponUsage to update in case it exists.
     */
    where: CouponUsageWhereUniqueInput
    /**
     * In case the CouponUsage found by the `where` argument doesn't exist, create a new CouponUsage with this data.
     */
    create: XOR<CouponUsageCreateInput, CouponUsageUncheckedCreateInput>
    /**
     * In case the CouponUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUsageUpdateInput, CouponUsageUncheckedUpdateInput>
  }

  /**
   * CouponUsage delete
   */
  export type CouponUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
    /**
     * Filter which CouponUsage to delete.
     */
    where: CouponUsageWhereUniqueInput
  }

  /**
   * CouponUsage deleteMany
   */
  export type CouponUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponUsages to delete
     */
    where?: CouponUsageWhereInput
  }

  /**
   * CouponUsage without action
   */
  export type CouponUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUsage
     */
    select?: CouponUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUsageInclude<ExtArgs> | null
  }


  /**
   * Model TaxConfig
   */

  export type AggregateTaxConfig = {
    _count: TaxConfigCountAggregateOutputType | null
    _avg: TaxConfigAvgAggregateOutputType | null
    _sum: TaxConfigSumAggregateOutputType | null
    _min: TaxConfigMinAggregateOutputType | null
    _max: TaxConfigMaxAggregateOutputType | null
  }

  export type TaxConfigAvgAggregateOutputType = {
    rate: Decimal | null
    cgstRate: Decimal | null
    sgstRate: Decimal | null
    igstRate: Decimal | null
  }

  export type TaxConfigSumAggregateOutputType = {
    rate: Decimal | null
    cgstRate: Decimal | null
    sgstRate: Decimal | null
    igstRate: Decimal | null
  }

  export type TaxConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    rate: Decimal | null
    cgstRate: Decimal | null
    sgstRate: Decimal | null
    igstRate: Decimal | null
    country: string | null
    isDefault: boolean | null
    isActive: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    rate: Decimal | null
    cgstRate: Decimal | null
    sgstRate: Decimal | null
    igstRate: Decimal | null
    country: string | null
    isDefault: boolean | null
    isActive: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxConfigCountAggregateOutputType = {
    id: number
    name: number
    code: number
    rate: number
    cgstRate: number
    sgstRate: number
    igstRate: number
    country: number
    states: number
    isDefault: number
    isActive: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxConfigAvgAggregateInputType = {
    rate?: true
    cgstRate?: true
    sgstRate?: true
    igstRate?: true
  }

  export type TaxConfigSumAggregateInputType = {
    rate?: true
    cgstRate?: true
    sgstRate?: true
    igstRate?: true
  }

  export type TaxConfigMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    rate?: true
    cgstRate?: true
    sgstRate?: true
    igstRate?: true
    country?: true
    isDefault?: true
    isActive?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxConfigMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    rate?: true
    cgstRate?: true
    sgstRate?: true
    igstRate?: true
    country?: true
    isDefault?: true
    isActive?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxConfigCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    rate?: true
    cgstRate?: true
    sgstRate?: true
    igstRate?: true
    country?: true
    states?: true
    isDefault?: true
    isActive?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxConfig to aggregate.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxConfigs
    **/
    _count?: true | TaxConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxConfigMaxAggregateInputType
  }

  export type GetTaxConfigAggregateType<T extends TaxConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxConfig[P]>
      : GetScalarType<T[P], AggregateTaxConfig[P]>
  }




  export type TaxConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxConfigWhereInput
    orderBy?: TaxConfigOrderByWithAggregationInput | TaxConfigOrderByWithAggregationInput[]
    by: TaxConfigScalarFieldEnum[] | TaxConfigScalarFieldEnum
    having?: TaxConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxConfigCountAggregateInputType | true
    _avg?: TaxConfigAvgAggregateInputType
    _sum?: TaxConfigSumAggregateInputType
    _min?: TaxConfigMinAggregateInputType
    _max?: TaxConfigMaxAggregateInputType
  }

  export type TaxConfigGroupByOutputType = {
    id: string
    name: string
    code: string
    rate: Decimal
    cgstRate: Decimal
    sgstRate: Decimal
    igstRate: Decimal
    country: string
    states: string[]
    isDefault: boolean
    isActive: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaxConfigCountAggregateOutputType | null
    _avg: TaxConfigAvgAggregateOutputType | null
    _sum: TaxConfigSumAggregateOutputType | null
    _min: TaxConfigMinAggregateOutputType | null
    _max: TaxConfigMaxAggregateOutputType | null
  }

  type GetTaxConfigGroupByPayload<T extends TaxConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TaxConfigGroupByOutputType[P]>
        }
      >
    >


  export type TaxConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    rate?: boolean
    cgstRate?: boolean
    sgstRate?: boolean
    igstRate?: boolean
    country?: boolean
    states?: boolean
    isDefault?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["taxConfig"]>

  export type TaxConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    rate?: boolean
    cgstRate?: boolean
    sgstRate?: boolean
    igstRate?: boolean
    country?: boolean
    states?: boolean
    isDefault?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["taxConfig"]>

  export type TaxConfigSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    rate?: boolean
    cgstRate?: boolean
    sgstRate?: boolean
    igstRate?: boolean
    country?: boolean
    states?: boolean
    isDefault?: boolean
    isActive?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TaxConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      rate: Prisma.Decimal
      cgstRate: Prisma.Decimal
      sgstRate: Prisma.Decimal
      igstRate: Prisma.Decimal
      country: string
      states: string[]
      isDefault: boolean
      isActive: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taxConfig"]>
    composites: {}
  }

  type TaxConfigGetPayload<S extends boolean | null | undefined | TaxConfigDefaultArgs> = $Result.GetResult<Prisma.$TaxConfigPayload, S>

  type TaxConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaxConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaxConfigCountAggregateInputType | true
    }

  export interface TaxConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxConfig'], meta: { name: 'TaxConfig' } }
    /**
     * Find zero or one TaxConfig that matches the filter.
     * @param {TaxConfigFindUniqueArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxConfigFindUniqueArgs>(args: SelectSubset<T, TaxConfigFindUniqueArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaxConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaxConfigFindUniqueOrThrowArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaxConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigFindFirstArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxConfigFindFirstArgs>(args?: SelectSubset<T, TaxConfigFindFirstArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaxConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigFindFirstOrThrowArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaxConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxConfigs
     * const taxConfigs = await prisma.taxConfig.findMany()
     * 
     * // Get first 10 TaxConfigs
     * const taxConfigs = await prisma.taxConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxConfigWithIdOnly = await prisma.taxConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxConfigFindManyArgs>(args?: SelectSubset<T, TaxConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaxConfig.
     * @param {TaxConfigCreateArgs} args - Arguments to create a TaxConfig.
     * @example
     * // Create one TaxConfig
     * const TaxConfig = await prisma.taxConfig.create({
     *   data: {
     *     // ... data to create a TaxConfig
     *   }
     * })
     * 
     */
    create<T extends TaxConfigCreateArgs>(args: SelectSubset<T, TaxConfigCreateArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaxConfigs.
     * @param {TaxConfigCreateManyArgs} args - Arguments to create many TaxConfigs.
     * @example
     * // Create many TaxConfigs
     * const taxConfig = await prisma.taxConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxConfigCreateManyArgs>(args?: SelectSubset<T, TaxConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxConfigs and returns the data saved in the database.
     * @param {TaxConfigCreateManyAndReturnArgs} args - Arguments to create many TaxConfigs.
     * @example
     * // Create many TaxConfigs
     * const taxConfig = await prisma.taxConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxConfigs and only return the `id`
     * const taxConfigWithIdOnly = await prisma.taxConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaxConfig.
     * @param {TaxConfigDeleteArgs} args - Arguments to delete one TaxConfig.
     * @example
     * // Delete one TaxConfig
     * const TaxConfig = await prisma.taxConfig.delete({
     *   where: {
     *     // ... filter to delete one TaxConfig
     *   }
     * })
     * 
     */
    delete<T extends TaxConfigDeleteArgs>(args: SelectSubset<T, TaxConfigDeleteArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaxConfig.
     * @param {TaxConfigUpdateArgs} args - Arguments to update one TaxConfig.
     * @example
     * // Update one TaxConfig
     * const taxConfig = await prisma.taxConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxConfigUpdateArgs>(args: SelectSubset<T, TaxConfigUpdateArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaxConfigs.
     * @param {TaxConfigDeleteManyArgs} args - Arguments to filter TaxConfigs to delete.
     * @example
     * // Delete a few TaxConfigs
     * const { count } = await prisma.taxConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxConfigDeleteManyArgs>(args?: SelectSubset<T, TaxConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxConfigs
     * const taxConfig = await prisma.taxConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxConfigUpdateManyArgs>(args: SelectSubset<T, TaxConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaxConfig.
     * @param {TaxConfigUpsertArgs} args - Arguments to update or create a TaxConfig.
     * @example
     * // Update or create a TaxConfig
     * const taxConfig = await prisma.taxConfig.upsert({
     *   create: {
     *     // ... data to create a TaxConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxConfig we want to update
     *   }
     * })
     */
    upsert<T extends TaxConfigUpsertArgs>(args: SelectSubset<T, TaxConfigUpsertArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaxConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigCountArgs} args - Arguments to filter TaxConfigs to count.
     * @example
     * // Count the number of TaxConfigs
     * const count = await prisma.taxConfig.count({
     *   where: {
     *     // ... the filter for the TaxConfigs we want to count
     *   }
     * })
    **/
    count<T extends TaxConfigCountArgs>(
      args?: Subset<T, TaxConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxConfigAggregateArgs>(args: Subset<T, TaxConfigAggregateArgs>): Prisma.PrismaPromise<GetTaxConfigAggregateType<T>>

    /**
     * Group by TaxConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigGroupByArgs} args - Group by arguments.
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
      T extends TaxConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxConfigGroupByArgs['orderBy'] }
        : { orderBy?: TaxConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaxConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxConfig model
   */
  readonly fields: TaxConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TaxConfig model
   */ 
  interface TaxConfigFieldRefs {
    readonly id: FieldRef<"TaxConfig", 'String'>
    readonly name: FieldRef<"TaxConfig", 'String'>
    readonly code: FieldRef<"TaxConfig", 'String'>
    readonly rate: FieldRef<"TaxConfig", 'Decimal'>
    readonly cgstRate: FieldRef<"TaxConfig", 'Decimal'>
    readonly sgstRate: FieldRef<"TaxConfig", 'Decimal'>
    readonly igstRate: FieldRef<"TaxConfig", 'Decimal'>
    readonly country: FieldRef<"TaxConfig", 'String'>
    readonly states: FieldRef<"TaxConfig", 'String[]'>
    readonly isDefault: FieldRef<"TaxConfig", 'Boolean'>
    readonly isActive: FieldRef<"TaxConfig", 'Boolean'>
    readonly description: FieldRef<"TaxConfig", 'String'>
    readonly createdAt: FieldRef<"TaxConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"TaxConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxConfig findUnique
   */
  export type TaxConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig findUniqueOrThrow
   */
  export type TaxConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig findFirst
   */
  export type TaxConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxConfigs.
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxConfigs.
     */
    distinct?: TaxConfigScalarFieldEnum | TaxConfigScalarFieldEnum[]
  }

  /**
   * TaxConfig findFirstOrThrow
   */
  export type TaxConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxConfigs.
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxConfigs.
     */
    distinct?: TaxConfigScalarFieldEnum | TaxConfigScalarFieldEnum[]
  }

  /**
   * TaxConfig findMany
   */
  export type TaxConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Filter, which TaxConfigs to fetch.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxConfigs.
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    distinct?: TaxConfigScalarFieldEnum | TaxConfigScalarFieldEnum[]
  }

  /**
   * TaxConfig create
   */
  export type TaxConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a TaxConfig.
     */
    data: XOR<TaxConfigCreateInput, TaxConfigUncheckedCreateInput>
  }

  /**
   * TaxConfig createMany
   */
  export type TaxConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxConfigs.
     */
    data: TaxConfigCreateManyInput | TaxConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxConfig createManyAndReturn
   */
  export type TaxConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaxConfigs.
     */
    data: TaxConfigCreateManyInput | TaxConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxConfig update
   */
  export type TaxConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a TaxConfig.
     */
    data: XOR<TaxConfigUpdateInput, TaxConfigUncheckedUpdateInput>
    /**
     * Choose, which TaxConfig to update.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig updateMany
   */
  export type TaxConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxConfigs.
     */
    data: XOR<TaxConfigUpdateManyMutationInput, TaxConfigUncheckedUpdateManyInput>
    /**
     * Filter which TaxConfigs to update
     */
    where?: TaxConfigWhereInput
  }

  /**
   * TaxConfig upsert
   */
  export type TaxConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the TaxConfig to update in case it exists.
     */
    where: TaxConfigWhereUniqueInput
    /**
     * In case the TaxConfig found by the `where` argument doesn't exist, create a new TaxConfig with this data.
     */
    create: XOR<TaxConfigCreateInput, TaxConfigUncheckedCreateInput>
    /**
     * In case the TaxConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxConfigUpdateInput, TaxConfigUncheckedUpdateInput>
  }

  /**
   * TaxConfig delete
   */
  export type TaxConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Filter which TaxConfig to delete.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig deleteMany
   */
  export type TaxConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxConfigs to delete
     */
    where?: TaxConfigWhereInput
  }

  /**
   * TaxConfig without action
   */
  export type TaxConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
  }


  /**
   * Model PaymentGatewayConfig
   */

  export type AggregatePaymentGatewayConfig = {
    _count: PaymentGatewayConfigCountAggregateOutputType | null
    _avg: PaymentGatewayConfigAvgAggregateOutputType | null
    _sum: PaymentGatewayConfigSumAggregateOutputType | null
    _min: PaymentGatewayConfigMinAggregateOutputType | null
    _max: PaymentGatewayConfigMaxAggregateOutputType | null
  }

  export type PaymentGatewayConfigAvgAggregateOutputType = {
    transactionFeePercent: Decimal | null
    transactionFeeFixed: Decimal | null
  }

  export type PaymentGatewayConfigSumAggregateOutputType = {
    transactionFeePercent: Decimal | null
    transactionFeeFixed: Decimal | null
  }

  export type PaymentGatewayConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    apiKey: string | null
    apiSecret: string | null
    webhookSecret: string | null
    merchantId: string | null
    isActive: boolean | null
    isDefault: boolean | null
    testMode: boolean | null
    transactionFeePercent: Decimal | null
    transactionFeeFixed: Decimal | null
    callbackUrl: string | null
    webhookUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentGatewayConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    apiKey: string | null
    apiSecret: string | null
    webhookSecret: string | null
    merchantId: string | null
    isActive: boolean | null
    isDefault: boolean | null
    testMode: boolean | null
    transactionFeePercent: Decimal | null
    transactionFeeFixed: Decimal | null
    callbackUrl: string | null
    webhookUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentGatewayConfigCountAggregateOutputType = {
    id: number
    name: number
    code: number
    apiKey: number
    apiSecret: number
    webhookSecret: number
    merchantId: number
    isActive: number
    isDefault: number
    testMode: number
    supportedMethods: number
    transactionFeePercent: number
    transactionFeeFixed: number
    callbackUrl: number
    webhookUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentGatewayConfigAvgAggregateInputType = {
    transactionFeePercent?: true
    transactionFeeFixed?: true
  }

  export type PaymentGatewayConfigSumAggregateInputType = {
    transactionFeePercent?: true
    transactionFeeFixed?: true
  }

  export type PaymentGatewayConfigMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    apiKey?: true
    apiSecret?: true
    webhookSecret?: true
    merchantId?: true
    isActive?: true
    isDefault?: true
    testMode?: true
    transactionFeePercent?: true
    transactionFeeFixed?: true
    callbackUrl?: true
    webhookUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentGatewayConfigMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    apiKey?: true
    apiSecret?: true
    webhookSecret?: true
    merchantId?: true
    isActive?: true
    isDefault?: true
    testMode?: true
    transactionFeePercent?: true
    transactionFeeFixed?: true
    callbackUrl?: true
    webhookUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentGatewayConfigCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    apiKey?: true
    apiSecret?: true
    webhookSecret?: true
    merchantId?: true
    isActive?: true
    isDefault?: true
    testMode?: true
    supportedMethods?: true
    transactionFeePercent?: true
    transactionFeeFixed?: true
    callbackUrl?: true
    webhookUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentGatewayConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentGatewayConfig to aggregate.
     */
    where?: PaymentGatewayConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentGatewayConfigs to fetch.
     */
    orderBy?: PaymentGatewayConfigOrderByWithRelationInput | PaymentGatewayConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentGatewayConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentGatewayConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentGatewayConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentGatewayConfigs
    **/
    _count?: true | PaymentGatewayConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentGatewayConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentGatewayConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentGatewayConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentGatewayConfigMaxAggregateInputType
  }

  export type GetPaymentGatewayConfigAggregateType<T extends PaymentGatewayConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentGatewayConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentGatewayConfig[P]>
      : GetScalarType<T[P], AggregatePaymentGatewayConfig[P]>
  }




  export type PaymentGatewayConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentGatewayConfigWhereInput
    orderBy?: PaymentGatewayConfigOrderByWithAggregationInput | PaymentGatewayConfigOrderByWithAggregationInput[]
    by: PaymentGatewayConfigScalarFieldEnum[] | PaymentGatewayConfigScalarFieldEnum
    having?: PaymentGatewayConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentGatewayConfigCountAggregateInputType | true
    _avg?: PaymentGatewayConfigAvgAggregateInputType
    _sum?: PaymentGatewayConfigSumAggregateInputType
    _min?: PaymentGatewayConfigMinAggregateInputType
    _max?: PaymentGatewayConfigMaxAggregateInputType
  }

  export type PaymentGatewayConfigGroupByOutputType = {
    id: string
    name: string
    code: string
    apiKey: string | null
    apiSecret: string | null
    webhookSecret: string | null
    merchantId: string | null
    isActive: boolean
    isDefault: boolean
    testMode: boolean
    supportedMethods: string[]
    transactionFeePercent: Decimal
    transactionFeeFixed: Decimal
    callbackUrl: string | null
    webhookUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentGatewayConfigCountAggregateOutputType | null
    _avg: PaymentGatewayConfigAvgAggregateOutputType | null
    _sum: PaymentGatewayConfigSumAggregateOutputType | null
    _min: PaymentGatewayConfigMinAggregateOutputType | null
    _max: PaymentGatewayConfigMaxAggregateOutputType | null
  }

  type GetPaymentGatewayConfigGroupByPayload<T extends PaymentGatewayConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGatewayConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGatewayConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGatewayConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGatewayConfigGroupByOutputType[P]>
        }
      >
    >


  export type PaymentGatewayConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    webhookSecret?: boolean
    merchantId?: boolean
    isActive?: boolean
    isDefault?: boolean
    testMode?: boolean
    supportedMethods?: boolean
    transactionFeePercent?: boolean
    transactionFeeFixed?: boolean
    callbackUrl?: boolean
    webhookUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentGatewayConfig"]>

  export type PaymentGatewayConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    webhookSecret?: boolean
    merchantId?: boolean
    isActive?: boolean
    isDefault?: boolean
    testMode?: boolean
    supportedMethods?: boolean
    transactionFeePercent?: boolean
    transactionFeeFixed?: boolean
    callbackUrl?: boolean
    webhookUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentGatewayConfig"]>

  export type PaymentGatewayConfigSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    webhookSecret?: boolean
    merchantId?: boolean
    isActive?: boolean
    isDefault?: boolean
    testMode?: boolean
    supportedMethods?: boolean
    transactionFeePercent?: boolean
    transactionFeeFixed?: boolean
    callbackUrl?: boolean
    webhookUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PaymentGatewayConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentGatewayConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      apiKey: string | null
      apiSecret: string | null
      webhookSecret: string | null
      merchantId: string | null
      isActive: boolean
      isDefault: boolean
      testMode: boolean
      supportedMethods: string[]
      transactionFeePercent: Prisma.Decimal
      transactionFeeFixed: Prisma.Decimal
      callbackUrl: string | null
      webhookUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentGatewayConfig"]>
    composites: {}
  }

  type PaymentGatewayConfigGetPayload<S extends boolean | null | undefined | PaymentGatewayConfigDefaultArgs> = $Result.GetResult<Prisma.$PaymentGatewayConfigPayload, S>

  type PaymentGatewayConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentGatewayConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentGatewayConfigCountAggregateInputType | true
    }

  export interface PaymentGatewayConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentGatewayConfig'], meta: { name: 'PaymentGatewayConfig' } }
    /**
     * Find zero or one PaymentGatewayConfig that matches the filter.
     * @param {PaymentGatewayConfigFindUniqueArgs} args - Arguments to find a PaymentGatewayConfig
     * @example
     * // Get one PaymentGatewayConfig
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentGatewayConfigFindUniqueArgs>(args: SelectSubset<T, PaymentGatewayConfigFindUniqueArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentGatewayConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentGatewayConfigFindUniqueOrThrowArgs} args - Arguments to find a PaymentGatewayConfig
     * @example
     * // Get one PaymentGatewayConfig
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentGatewayConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentGatewayConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentGatewayConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigFindFirstArgs} args - Arguments to find a PaymentGatewayConfig
     * @example
     * // Get one PaymentGatewayConfig
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentGatewayConfigFindFirstArgs>(args?: SelectSubset<T, PaymentGatewayConfigFindFirstArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentGatewayConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigFindFirstOrThrowArgs} args - Arguments to find a PaymentGatewayConfig
     * @example
     * // Get one PaymentGatewayConfig
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentGatewayConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentGatewayConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentGatewayConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentGatewayConfigs
     * const paymentGatewayConfigs = await prisma.paymentGatewayConfig.findMany()
     * 
     * // Get first 10 PaymentGatewayConfigs
     * const paymentGatewayConfigs = await prisma.paymentGatewayConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentGatewayConfigWithIdOnly = await prisma.paymentGatewayConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentGatewayConfigFindManyArgs>(args?: SelectSubset<T, PaymentGatewayConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentGatewayConfig.
     * @param {PaymentGatewayConfigCreateArgs} args - Arguments to create a PaymentGatewayConfig.
     * @example
     * // Create one PaymentGatewayConfig
     * const PaymentGatewayConfig = await prisma.paymentGatewayConfig.create({
     *   data: {
     *     // ... data to create a PaymentGatewayConfig
     *   }
     * })
     * 
     */
    create<T extends PaymentGatewayConfigCreateArgs>(args: SelectSubset<T, PaymentGatewayConfigCreateArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentGatewayConfigs.
     * @param {PaymentGatewayConfigCreateManyArgs} args - Arguments to create many PaymentGatewayConfigs.
     * @example
     * // Create many PaymentGatewayConfigs
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentGatewayConfigCreateManyArgs>(args?: SelectSubset<T, PaymentGatewayConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentGatewayConfigs and returns the data saved in the database.
     * @param {PaymentGatewayConfigCreateManyAndReturnArgs} args - Arguments to create many PaymentGatewayConfigs.
     * @example
     * // Create many PaymentGatewayConfigs
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentGatewayConfigs and only return the `id`
     * const paymentGatewayConfigWithIdOnly = await prisma.paymentGatewayConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentGatewayConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentGatewayConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentGatewayConfig.
     * @param {PaymentGatewayConfigDeleteArgs} args - Arguments to delete one PaymentGatewayConfig.
     * @example
     * // Delete one PaymentGatewayConfig
     * const PaymentGatewayConfig = await prisma.paymentGatewayConfig.delete({
     *   where: {
     *     // ... filter to delete one PaymentGatewayConfig
     *   }
     * })
     * 
     */
    delete<T extends PaymentGatewayConfigDeleteArgs>(args: SelectSubset<T, PaymentGatewayConfigDeleteArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentGatewayConfig.
     * @param {PaymentGatewayConfigUpdateArgs} args - Arguments to update one PaymentGatewayConfig.
     * @example
     * // Update one PaymentGatewayConfig
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentGatewayConfigUpdateArgs>(args: SelectSubset<T, PaymentGatewayConfigUpdateArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentGatewayConfigs.
     * @param {PaymentGatewayConfigDeleteManyArgs} args - Arguments to filter PaymentGatewayConfigs to delete.
     * @example
     * // Delete a few PaymentGatewayConfigs
     * const { count } = await prisma.paymentGatewayConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentGatewayConfigDeleteManyArgs>(args?: SelectSubset<T, PaymentGatewayConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentGatewayConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentGatewayConfigs
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentGatewayConfigUpdateManyArgs>(args: SelectSubset<T, PaymentGatewayConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentGatewayConfig.
     * @param {PaymentGatewayConfigUpsertArgs} args - Arguments to update or create a PaymentGatewayConfig.
     * @example
     * // Update or create a PaymentGatewayConfig
     * const paymentGatewayConfig = await prisma.paymentGatewayConfig.upsert({
     *   create: {
     *     // ... data to create a PaymentGatewayConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentGatewayConfig we want to update
     *   }
     * })
     */
    upsert<T extends PaymentGatewayConfigUpsertArgs>(args: SelectSubset<T, PaymentGatewayConfigUpsertArgs<ExtArgs>>): Prisma__PaymentGatewayConfigClient<$Result.GetResult<Prisma.$PaymentGatewayConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentGatewayConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigCountArgs} args - Arguments to filter PaymentGatewayConfigs to count.
     * @example
     * // Count the number of PaymentGatewayConfigs
     * const count = await prisma.paymentGatewayConfig.count({
     *   where: {
     *     // ... the filter for the PaymentGatewayConfigs we want to count
     *   }
     * })
    **/
    count<T extends PaymentGatewayConfigCountArgs>(
      args?: Subset<T, PaymentGatewayConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentGatewayConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentGatewayConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentGatewayConfigAggregateArgs>(args: Subset<T, PaymentGatewayConfigAggregateArgs>): Prisma.PrismaPromise<GetPaymentGatewayConfigAggregateType<T>>

    /**
     * Group by PaymentGatewayConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGatewayConfigGroupByArgs} args - Group by arguments.
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
      T extends PaymentGatewayConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGatewayConfigGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGatewayConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGatewayConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGatewayConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentGatewayConfig model
   */
  readonly fields: PaymentGatewayConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentGatewayConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentGatewayConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PaymentGatewayConfig model
   */ 
  interface PaymentGatewayConfigFieldRefs {
    readonly id: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly name: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly code: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly apiKey: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly apiSecret: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly webhookSecret: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly merchantId: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly isActive: FieldRef<"PaymentGatewayConfig", 'Boolean'>
    readonly isDefault: FieldRef<"PaymentGatewayConfig", 'Boolean'>
    readonly testMode: FieldRef<"PaymentGatewayConfig", 'Boolean'>
    readonly supportedMethods: FieldRef<"PaymentGatewayConfig", 'String[]'>
    readonly transactionFeePercent: FieldRef<"PaymentGatewayConfig", 'Decimal'>
    readonly transactionFeeFixed: FieldRef<"PaymentGatewayConfig", 'Decimal'>
    readonly callbackUrl: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly webhookUrl: FieldRef<"PaymentGatewayConfig", 'String'>
    readonly createdAt: FieldRef<"PaymentGatewayConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentGatewayConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentGatewayConfig findUnique
   */
  export type PaymentGatewayConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * Filter, which PaymentGatewayConfig to fetch.
     */
    where: PaymentGatewayConfigWhereUniqueInput
  }

  /**
   * PaymentGatewayConfig findUniqueOrThrow
   */
  export type PaymentGatewayConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * Filter, which PaymentGatewayConfig to fetch.
     */
    where: PaymentGatewayConfigWhereUniqueInput
  }

  /**
   * PaymentGatewayConfig findFirst
   */
  export type PaymentGatewayConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * Filter, which PaymentGatewayConfig to fetch.
     */
    where?: PaymentGatewayConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentGatewayConfigs to fetch.
     */
    orderBy?: PaymentGatewayConfigOrderByWithRelationInput | PaymentGatewayConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentGatewayConfigs.
     */
    cursor?: PaymentGatewayConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentGatewayConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentGatewayConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentGatewayConfigs.
     */
    distinct?: PaymentGatewayConfigScalarFieldEnum | PaymentGatewayConfigScalarFieldEnum[]
  }

  /**
   * PaymentGatewayConfig findFirstOrThrow
   */
  export type PaymentGatewayConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * Filter, which PaymentGatewayConfig to fetch.
     */
    where?: PaymentGatewayConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentGatewayConfigs to fetch.
     */
    orderBy?: PaymentGatewayConfigOrderByWithRelationInput | PaymentGatewayConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentGatewayConfigs.
     */
    cursor?: PaymentGatewayConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentGatewayConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentGatewayConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentGatewayConfigs.
     */
    distinct?: PaymentGatewayConfigScalarFieldEnum | PaymentGatewayConfigScalarFieldEnum[]
  }

  /**
   * PaymentGatewayConfig findMany
   */
  export type PaymentGatewayConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * Filter, which PaymentGatewayConfigs to fetch.
     */
    where?: PaymentGatewayConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentGatewayConfigs to fetch.
     */
    orderBy?: PaymentGatewayConfigOrderByWithRelationInput | PaymentGatewayConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentGatewayConfigs.
     */
    cursor?: PaymentGatewayConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentGatewayConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentGatewayConfigs.
     */
    skip?: number
    distinct?: PaymentGatewayConfigScalarFieldEnum | PaymentGatewayConfigScalarFieldEnum[]
  }

  /**
   * PaymentGatewayConfig create
   */
  export type PaymentGatewayConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a PaymentGatewayConfig.
     */
    data: XOR<PaymentGatewayConfigCreateInput, PaymentGatewayConfigUncheckedCreateInput>
  }

  /**
   * PaymentGatewayConfig createMany
   */
  export type PaymentGatewayConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentGatewayConfigs.
     */
    data: PaymentGatewayConfigCreateManyInput | PaymentGatewayConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentGatewayConfig createManyAndReturn
   */
  export type PaymentGatewayConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentGatewayConfigs.
     */
    data: PaymentGatewayConfigCreateManyInput | PaymentGatewayConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentGatewayConfig update
   */
  export type PaymentGatewayConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a PaymentGatewayConfig.
     */
    data: XOR<PaymentGatewayConfigUpdateInput, PaymentGatewayConfigUncheckedUpdateInput>
    /**
     * Choose, which PaymentGatewayConfig to update.
     */
    where: PaymentGatewayConfigWhereUniqueInput
  }

  /**
   * PaymentGatewayConfig updateMany
   */
  export type PaymentGatewayConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentGatewayConfigs.
     */
    data: XOR<PaymentGatewayConfigUpdateManyMutationInput, PaymentGatewayConfigUncheckedUpdateManyInput>
    /**
     * Filter which PaymentGatewayConfigs to update
     */
    where?: PaymentGatewayConfigWhereInput
  }

  /**
   * PaymentGatewayConfig upsert
   */
  export type PaymentGatewayConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the PaymentGatewayConfig to update in case it exists.
     */
    where: PaymentGatewayConfigWhereUniqueInput
    /**
     * In case the PaymentGatewayConfig found by the `where` argument doesn't exist, create a new PaymentGatewayConfig with this data.
     */
    create: XOR<PaymentGatewayConfigCreateInput, PaymentGatewayConfigUncheckedCreateInput>
    /**
     * In case the PaymentGatewayConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentGatewayConfigUpdateInput, PaymentGatewayConfigUncheckedUpdateInput>
  }

  /**
   * PaymentGatewayConfig delete
   */
  export type PaymentGatewayConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
    /**
     * Filter which PaymentGatewayConfig to delete.
     */
    where: PaymentGatewayConfigWhereUniqueInput
  }

  /**
   * PaymentGatewayConfig deleteMany
   */
  export type PaymentGatewayConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentGatewayConfigs to delete
     */
    where?: PaymentGatewayConfigWhereInput
  }

  /**
   * PaymentGatewayConfig without action
   */
  export type PaymentGatewayConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentGatewayConfig
     */
    select?: PaymentGatewayConfigSelect<ExtArgs> | null
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


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    clientId: 'clientId',
    clientName: 'clientName',
    clientEmail: 'clientEmail',
    clientPhone: 'clientPhone',
    clientCompany: 'clientCompany',
    billingAddress: 'billingAddress',
    billingCity: 'billingCity',
    billingState: 'billingState',
    billingCountry: 'billingCountry',
    billingZipCode: 'billingZipCode',
    gstin: 'gstin',
    orderId: 'orderId',
    orderNumber: 'orderNumber',
    subscriptionId: 'subscriptionId',
    invoiceDate: 'invoiceDate',
    dueDate: 'dueDate',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    status: 'status',
    subtotal: 'subtotal',
    discountPercent: 'discountPercent',
    discountAmount: 'discountAmount',
    couponId: 'couponId',
    couponCode: 'couponCode',
    couponDiscount: 'couponDiscount',
    taxPercent: 'taxPercent',
    taxAmount: 'taxAmount',
    cgst: 'cgst',
    sgst: 'sgst',
    igst: 'igst',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    balanceAmount: 'balanceAmount',
    currency: 'currency',
    notes: 'notes',
    termsAndConditions: 'termsAndConditions',
    internalNotes: 'internalNotes',
    sentAt: 'sentAt',
    sentBy: 'sentBy',
    sentByName: 'sentByName',
    paidAt: 'paidAt',
    cancelledAt: 'cancelledAt',
    cancelReason: 'cancelReason',
    cancelledById: 'cancelledById',
    cancelledByName: 'cancelledByName',
    pdfUrl: 'pdfUrl',
    pdfGeneratedAt: 'pdfGeneratedAt',
    createdById: 'createdById',
    createdByName: 'createdByName',
    updatedById: 'updatedById',
    updatedByName: 'updatedByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    productId: 'productId',
    productName: 'productName',
    productCode: 'productCode',
    licenseTypeId: 'licenseTypeId',
    licenseTypeName: 'licenseTypeName',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    discountPercent: 'discountPercent',
    discountAmount: 'discountAmount',
    taxPercent: 'taxPercent',
    taxAmount: 'taxAmount',
    subtotal: 'subtotal',
    total: 'total',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    paymentNumber: 'paymentNumber',
    clientId: 'clientId',
    clientName: 'clientName',
    clientEmail: 'clientEmail',
    invoiceId: 'invoiceId',
    orderId: 'orderId',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    currency: 'currency',
    method: 'method',
    status: 'status',
    gatewayName: 'gatewayName',
    gatewayTxnId: 'gatewayTxnId',
    gatewayOrderId: 'gatewayOrderId',
    gatewayPaymentId: 'gatewayPaymentId',
    gatewayResponse: 'gatewayResponse',
    bankName: 'bankName',
    bankAccount: 'bankAccount',
    bankReference: 'bankReference',
    chequeNumber: 'chequeNumber',
    chequeDate: 'chequeDate',
    chequeBank: 'chequeBank',
    refundedAmount: 'refundedAmount',
    refundReason: 'refundReason',
    refundedAt: 'refundedAt',
    refundedById: 'refundedById',
    refundedByName: 'refundedByName',
    processedAt: 'processedAt',
    processedById: 'processedById',
    processedByName: 'processedByName',
    failureReason: 'failureReason',
    failureCode: 'failureCode',
    notes: 'notes',
    internalNotes: 'internalNotes',
    createdById: 'createdById',
    createdByName: 'createdByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    type: 'type',
    value: 'value',
    maxDiscount: 'maxDiscount',
    minOrderAmount: 'minOrderAmount',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    maxUses: 'maxUses',
    maxUsesPerClient: 'maxUsesPerClient',
    currentUses: 'currentUses',
    applicableProducts: 'applicableProducts',
    applicableLicenseTypes: 'applicableLicenseTypes',
    applicableClients: 'applicableClients',
    isFirstPurchaseOnly: 'isFirstPurchaseOnly',
    isRenewalApplicable: 'isRenewalApplicable',
    isStackable: 'isStackable',
    createdById: 'createdById',
    createdByName: 'createdByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CouponUsageScalarFieldEnum: {
    id: 'id',
    couponId: 'couponId',
    clientId: 'clientId',
    clientName: 'clientName',
    orderId: 'orderId',
    invoiceId: 'invoiceId',
    subscriptionId: 'subscriptionId',
    discountAmount: 'discountAmount',
    usedAt: 'usedAt'
  };

  export type CouponUsageScalarFieldEnum = (typeof CouponUsageScalarFieldEnum)[keyof typeof CouponUsageScalarFieldEnum]


  export const TaxConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    rate: 'rate',
    cgstRate: 'cgstRate',
    sgstRate: 'sgstRate',
    igstRate: 'igstRate',
    country: 'country',
    states: 'states',
    isDefault: 'isDefault',
    isActive: 'isActive',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxConfigScalarFieldEnum = (typeof TaxConfigScalarFieldEnum)[keyof typeof TaxConfigScalarFieldEnum]


  export const PaymentGatewayConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    apiKey: 'apiKey',
    apiSecret: 'apiSecret',
    webhookSecret: 'webhookSecret',
    merchantId: 'merchantId',
    isActive: 'isActive',
    isDefault: 'isDefault',
    testMode: 'testMode',
    supportedMethods: 'supportedMethods',
    transactionFeePercent: 'transactionFeePercent',
    transactionFeeFixed: 'transactionFeeFixed',
    callbackUrl: 'callbackUrl',
    webhookUrl: 'webhookUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentGatewayConfigScalarFieldEnum = (typeof PaymentGatewayConfigScalarFieldEnum)[keyof typeof PaymentGatewayConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'CouponType'
   */
  export type EnumCouponTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponType'>
    


  /**
   * Reference to a field of type 'CouponType[]'
   */
  export type ListEnumCouponTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponType[]'>
    


  /**
   * Reference to a field of type 'CouponStatus'
   */
  export type EnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus'>
    


  /**
   * Reference to a field of type 'CouponStatus[]'
   */
  export type ListEnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    clientId?: StringFilter<"Invoice"> | string
    clientName?: StringFilter<"Invoice"> | string
    clientEmail?: StringNullableFilter<"Invoice"> | string | null
    clientPhone?: StringNullableFilter<"Invoice"> | string | null
    clientCompany?: StringNullableFilter<"Invoice"> | string | null
    billingAddress?: StringNullableFilter<"Invoice"> | string | null
    billingCity?: StringNullableFilter<"Invoice"> | string | null
    billingState?: StringNullableFilter<"Invoice"> | string | null
    billingCountry?: StringNullableFilter<"Invoice"> | string | null
    billingZipCode?: StringNullableFilter<"Invoice"> | string | null
    gstin?: StringNullableFilter<"Invoice"> | string | null
    orderId?: StringNullableFilter<"Invoice"> | string | null
    orderNumber?: StringNullableFilter<"Invoice"> | string | null
    subscriptionId?: StringNullableFilter<"Invoice"> | string | null
    invoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    periodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    couponId?: StringNullableFilter<"Invoice"> | string | null
    couponCode?: StringNullableFilter<"Invoice"> | string | null
    couponDiscount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    igst?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableFilter<"Invoice"> | string | null
    internalNotes?: StringNullableFilter<"Invoice"> | string | null
    sentAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    sentBy?: StringNullableFilter<"Invoice"> | string | null
    sentByName?: StringNullableFilter<"Invoice"> | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    cancelReason?: StringNullableFilter<"Invoice"> | string | null
    cancelledById?: StringNullableFilter<"Invoice"> | string | null
    cancelledByName?: StringNullableFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    pdfGeneratedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdById?: StringNullableFilter<"Invoice"> | string | null
    createdByName?: StringNullableFilter<"Invoice"> | string | null
    updatedById?: StringNullableFilter<"Invoice"> | string | null
    updatedByName?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    items?: InvoiceItemListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    clientPhone?: SortOrderInput | SortOrder
    clientCompany?: SortOrderInput | SortOrder
    billingAddress?: SortOrderInput | SortOrder
    billingCity?: SortOrderInput | SortOrder
    billingState?: SortOrderInput | SortOrder
    billingCountry?: SortOrderInput | SortOrder
    billingZipCode?: SortOrderInput | SortOrder
    gstin?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    orderNumber?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    invoiceDate?: SortOrder
    dueDate?: SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    currency?: SortOrder
    notes?: SortOrderInput | SortOrder
    termsAndConditions?: SortOrderInput | SortOrder
    internalNotes?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    sentBy?: SortOrderInput | SortOrder
    sentByName?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    cancelledById?: SortOrderInput | SortOrder
    cancelledByName?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfGeneratedAt?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    updatedByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: InvoiceItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    clientId?: StringFilter<"Invoice"> | string
    clientName?: StringFilter<"Invoice"> | string
    clientEmail?: StringNullableFilter<"Invoice"> | string | null
    clientPhone?: StringNullableFilter<"Invoice"> | string | null
    clientCompany?: StringNullableFilter<"Invoice"> | string | null
    billingAddress?: StringNullableFilter<"Invoice"> | string | null
    billingCity?: StringNullableFilter<"Invoice"> | string | null
    billingState?: StringNullableFilter<"Invoice"> | string | null
    billingCountry?: StringNullableFilter<"Invoice"> | string | null
    billingZipCode?: StringNullableFilter<"Invoice"> | string | null
    gstin?: StringNullableFilter<"Invoice"> | string | null
    orderId?: StringNullableFilter<"Invoice"> | string | null
    orderNumber?: StringNullableFilter<"Invoice"> | string | null
    subscriptionId?: StringNullableFilter<"Invoice"> | string | null
    invoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    periodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    couponId?: StringNullableFilter<"Invoice"> | string | null
    couponCode?: StringNullableFilter<"Invoice"> | string | null
    couponDiscount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    igst?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableFilter<"Invoice"> | string | null
    internalNotes?: StringNullableFilter<"Invoice"> | string | null
    sentAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    sentBy?: StringNullableFilter<"Invoice"> | string | null
    sentByName?: StringNullableFilter<"Invoice"> | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    cancelReason?: StringNullableFilter<"Invoice"> | string | null
    cancelledById?: StringNullableFilter<"Invoice"> | string | null
    cancelledByName?: StringNullableFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    pdfGeneratedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdById?: StringNullableFilter<"Invoice"> | string | null
    createdByName?: StringNullableFilter<"Invoice"> | string | null
    updatedById?: StringNullableFilter<"Invoice"> | string | null
    updatedByName?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    items?: InvoiceItemListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    clientPhone?: SortOrderInput | SortOrder
    clientCompany?: SortOrderInput | SortOrder
    billingAddress?: SortOrderInput | SortOrder
    billingCity?: SortOrderInput | SortOrder
    billingState?: SortOrderInput | SortOrder
    billingCountry?: SortOrderInput | SortOrder
    billingZipCode?: SortOrderInput | SortOrder
    gstin?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    orderNumber?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    invoiceDate?: SortOrder
    dueDate?: SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    currency?: SortOrder
    notes?: SortOrderInput | SortOrder
    termsAndConditions?: SortOrderInput | SortOrder
    internalNotes?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    sentBy?: SortOrderInput | SortOrder
    sentByName?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    cancelledById?: SortOrderInput | SortOrder
    cancelledByName?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfGeneratedAt?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    updatedByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    clientId?: StringWithAggregatesFilter<"Invoice"> | string
    clientName?: StringWithAggregatesFilter<"Invoice"> | string
    clientEmail?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientPhone?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientCompany?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingAddress?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingCity?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingState?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingCountry?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingZipCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    gstin?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    orderNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    invoiceDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    periodStart?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    couponId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    couponCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    couponDiscount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    cgst?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    sgst?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    igst?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    termsAndConditions?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    internalNotes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    sentBy?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    sentByName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    cancelReason?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    cancelledById?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    cancelledByName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    pdfGeneratedAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    createdById?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdByName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    updatedByName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    productId?: StringNullableFilter<"InvoiceItem"> | string | null
    productName?: StringFilter<"InvoiceItem"> | string
    productCode?: StringNullableFilter<"InvoiceItem"> | string | null
    licenseTypeId?: StringNullableFilter<"InvoiceItem"> | string | null
    licenseTypeName?: StringNullableFilter<"InvoiceItem"> | string | null
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: IntFilter<"InvoiceItem"> | number
    unitPrice?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeNullableFilter<"InvoiceItem"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"InvoiceItem"> | Date | string | null
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrder
    productCode?: SortOrderInput | SortOrder
    licenseTypeId?: SortOrderInput | SortOrder
    licenseTypeName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoiceId?: StringFilter<"InvoiceItem"> | string
    productId?: StringNullableFilter<"InvoiceItem"> | string | null
    productName?: StringFilter<"InvoiceItem"> | string
    productCode?: StringNullableFilter<"InvoiceItem"> | string | null
    licenseTypeId?: StringNullableFilter<"InvoiceItem"> | string | null
    licenseTypeName?: StringNullableFilter<"InvoiceItem"> | string | null
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: IntFilter<"InvoiceItem"> | number
    unitPrice?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeNullableFilter<"InvoiceItem"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"InvoiceItem"> | Date | string | null
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrder
    productCode?: SortOrderInput | SortOrder
    licenseTypeId?: SortOrderInput | SortOrder
    licenseTypeName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItem"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceItem"> | string
    productId?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    productName?: StringWithAggregatesFilter<"InvoiceItem"> | string
    productCode?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    licenseTypeId?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    licenseTypeName?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    quantity?: IntWithAggregatesFilter<"InvoiceItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeNullableWithAggregatesFilter<"InvoiceItem"> | Date | string | null
    periodEnd?: DateTimeNullableWithAggregatesFilter<"InvoiceItem"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvoiceItem"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    paymentNumber?: StringFilter<"Payment"> | string
    clientId?: StringFilter<"Payment"> | string
    clientName?: StringFilter<"Payment"> | string
    clientEmail?: StringNullableFilter<"Payment"> | string | null
    invoiceId?: StringNullableFilter<"Payment"> | string | null
    orderId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayName?: StringNullableFilter<"Payment"> | string | null
    gatewayTxnId?: StringNullableFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    bankName?: StringNullableFilter<"Payment"> | string | null
    bankAccount?: StringNullableFilter<"Payment"> | string | null
    bankReference?: StringNullableFilter<"Payment"> | string | null
    chequeNumber?: StringNullableFilter<"Payment"> | string | null
    chequeDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    chequeBank?: StringNullableFilter<"Payment"> | string | null
    refundedAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    refundReason?: StringNullableFilter<"Payment"> | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedById?: StringNullableFilter<"Payment"> | string | null
    refundedByName?: StringNullableFilter<"Payment"> | string | null
    processedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    processedById?: StringNullableFilter<"Payment"> | string | null
    processedByName?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    failureCode?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    internalNotes?: StringNullableFilter<"Payment"> | string | null
    createdById?: StringNullableFilter<"Payment"> | string | null
    createdByName?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceNullableRelationFilter, InvoiceWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    gatewayName?: SortOrderInput | SortOrder
    gatewayTxnId?: SortOrderInput | SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    bankReference?: SortOrderInput | SortOrder
    chequeNumber?: SortOrderInput | SortOrder
    chequeDate?: SortOrderInput | SortOrder
    chequeBank?: SortOrderInput | SortOrder
    refundedAmount?: SortOrder
    refundReason?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    refundedById?: SortOrderInput | SortOrder
    refundedByName?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedById?: SortOrderInput | SortOrder
    processedByName?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    failureCode?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    internalNotes?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentNumber?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    clientId?: StringFilter<"Payment"> | string
    clientName?: StringFilter<"Payment"> | string
    clientEmail?: StringNullableFilter<"Payment"> | string | null
    invoiceId?: StringNullableFilter<"Payment"> | string | null
    orderId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayName?: StringNullableFilter<"Payment"> | string | null
    gatewayTxnId?: StringNullableFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    bankName?: StringNullableFilter<"Payment"> | string | null
    bankAccount?: StringNullableFilter<"Payment"> | string | null
    bankReference?: StringNullableFilter<"Payment"> | string | null
    chequeNumber?: StringNullableFilter<"Payment"> | string | null
    chequeDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    chequeBank?: StringNullableFilter<"Payment"> | string | null
    refundedAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    refundReason?: StringNullableFilter<"Payment"> | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedById?: StringNullableFilter<"Payment"> | string | null
    refundedByName?: StringNullableFilter<"Payment"> | string | null
    processedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    processedById?: StringNullableFilter<"Payment"> | string | null
    processedByName?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    failureCode?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    internalNotes?: StringNullableFilter<"Payment"> | string | null
    createdById?: StringNullableFilter<"Payment"> | string | null
    createdByName?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceNullableRelationFilter, InvoiceWhereInput> | null
  }, "id" | "paymentNumber">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    gatewayName?: SortOrderInput | SortOrder
    gatewayTxnId?: SortOrderInput | SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    bankReference?: SortOrderInput | SortOrder
    chequeNumber?: SortOrderInput | SortOrder
    chequeDate?: SortOrderInput | SortOrder
    chequeBank?: SortOrderInput | SortOrder
    refundedAmount?: SortOrder
    refundReason?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    refundedById?: SortOrderInput | SortOrder
    refundedByName?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedById?: SortOrderInput | SortOrder
    processedByName?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    failureCode?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    internalNotes?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    paymentNumber?: StringWithAggregatesFilter<"Payment"> | string
    clientId?: StringWithAggregatesFilter<"Payment"> | string
    clientName?: StringWithAggregatesFilter<"Payment"> | string
    clientEmail?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    invoiceId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    gatewayName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayTxnId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableWithAggregatesFilter<"Payment">
    bankName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    bankAccount?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    bankReference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    chequeNumber?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    chequeDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    chequeBank?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundedAmount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    refundReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundedById?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundedByName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    processedById?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    processedByName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    failureCode?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    internalNotes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdByName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    name?: StringFilter<"Coupon"> | string
    description?: StringNullableFilter<"Coupon"> | string | null
    type?: EnumCouponTypeFilter<"Coupon"> | $Enums.CouponType
    value?: DecimalFilter<"Coupon"> | Decimal | DecimalJsLike | number | string
    maxDiscount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFilter<"Coupon"> | $Enums.CouponStatus
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    maxUsesPerClient?: IntNullableFilter<"Coupon"> | number | null
    currentUses?: IntFilter<"Coupon"> | number
    applicableProducts?: StringNullableListFilter<"Coupon">
    applicableLicenseTypes?: StringNullableListFilter<"Coupon">
    applicableClients?: StringNullableListFilter<"Coupon">
    isFirstPurchaseOnly?: BoolFilter<"Coupon"> | boolean
    isRenewalApplicable?: BoolFilter<"Coupon"> | boolean
    isStackable?: BoolFilter<"Coupon"> | boolean
    createdById?: StringNullableFilter<"Coupon"> | string | null
    createdByName?: StringNullableFilter<"Coupon"> | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    usages?: CouponUsageListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    minOrderAmount?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    maxUsesPerClient?: SortOrderInput | SortOrder
    currentUses?: SortOrder
    applicableProducts?: SortOrder
    applicableLicenseTypes?: SortOrder
    applicableClients?: SortOrder
    isFirstPurchaseOnly?: SortOrder
    isRenewalApplicable?: SortOrder
    isStackable?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usages?: CouponUsageOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    name?: StringFilter<"Coupon"> | string
    description?: StringNullableFilter<"Coupon"> | string | null
    type?: EnumCouponTypeFilter<"Coupon"> | $Enums.CouponType
    value?: DecimalFilter<"Coupon"> | Decimal | DecimalJsLike | number | string
    maxDiscount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFilter<"Coupon"> | $Enums.CouponStatus
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    maxUsesPerClient?: IntNullableFilter<"Coupon"> | number | null
    currentUses?: IntFilter<"Coupon"> | number
    applicableProducts?: StringNullableListFilter<"Coupon">
    applicableLicenseTypes?: StringNullableListFilter<"Coupon">
    applicableClients?: StringNullableListFilter<"Coupon">
    isFirstPurchaseOnly?: BoolFilter<"Coupon"> | boolean
    isRenewalApplicable?: BoolFilter<"Coupon"> | boolean
    isStackable?: BoolFilter<"Coupon"> | boolean
    createdById?: StringNullableFilter<"Coupon"> | string | null
    createdByName?: StringNullableFilter<"Coupon"> | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    usages?: CouponUsageListRelationFilter
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    minOrderAmount?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    maxUsesPerClient?: SortOrderInput | SortOrder
    currentUses?: SortOrder
    applicableProducts?: SortOrder
    applicableLicenseTypes?: SortOrder
    applicableClients?: SortOrder
    isFirstPurchaseOnly?: SortOrder
    isRenewalApplicable?: SortOrder
    isStackable?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringWithAggregatesFilter<"Coupon"> | string
    name?: StringWithAggregatesFilter<"Coupon"> | string
    description?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    type?: EnumCouponTypeWithAggregatesFilter<"Coupon"> | $Enums.CouponType
    value?: DecimalWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string
    maxDiscount?: DecimalNullableWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: DecimalNullableWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusWithAggregatesFilter<"Coupon"> | $Enums.CouponStatus
    startDate?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    maxUses?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    maxUsesPerClient?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    currentUses?: IntWithAggregatesFilter<"Coupon"> | number
    applicableProducts?: StringNullableListFilter<"Coupon">
    applicableLicenseTypes?: StringNullableListFilter<"Coupon">
    applicableClients?: StringNullableListFilter<"Coupon">
    isFirstPurchaseOnly?: BoolWithAggregatesFilter<"Coupon"> | boolean
    isRenewalApplicable?: BoolWithAggregatesFilter<"Coupon"> | boolean
    isStackable?: BoolWithAggregatesFilter<"Coupon"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    createdByName?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type CouponUsageWhereInput = {
    AND?: CouponUsageWhereInput | CouponUsageWhereInput[]
    OR?: CouponUsageWhereInput[]
    NOT?: CouponUsageWhereInput | CouponUsageWhereInput[]
    id?: StringFilter<"CouponUsage"> | string
    couponId?: StringFilter<"CouponUsage"> | string
    clientId?: StringFilter<"CouponUsage"> | string
    clientName?: StringFilter<"CouponUsage"> | string
    orderId?: StringNullableFilter<"CouponUsage"> | string | null
    invoiceId?: StringNullableFilter<"CouponUsage"> | string | null
    subscriptionId?: StringNullableFilter<"CouponUsage"> | string | null
    discountAmount?: DecimalFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFilter<"CouponUsage"> | Date | string
    coupon?: XOR<CouponRelationFilter, CouponWhereInput>
  }

  export type CouponUsageOrderByWithRelationInput = {
    id?: SortOrder
    couponId?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    orderId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    usedAt?: SortOrder
    coupon?: CouponOrderByWithRelationInput
  }

  export type CouponUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CouponUsageWhereInput | CouponUsageWhereInput[]
    OR?: CouponUsageWhereInput[]
    NOT?: CouponUsageWhereInput | CouponUsageWhereInput[]
    couponId?: StringFilter<"CouponUsage"> | string
    clientId?: StringFilter<"CouponUsage"> | string
    clientName?: StringFilter<"CouponUsage"> | string
    orderId?: StringNullableFilter<"CouponUsage"> | string | null
    invoiceId?: StringNullableFilter<"CouponUsage"> | string | null
    subscriptionId?: StringNullableFilter<"CouponUsage"> | string | null
    discountAmount?: DecimalFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFilter<"CouponUsage"> | Date | string
    coupon?: XOR<CouponRelationFilter, CouponWhereInput>
  }, "id">

  export type CouponUsageOrderByWithAggregationInput = {
    id?: SortOrder
    couponId?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    orderId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    usedAt?: SortOrder
    _count?: CouponUsageCountOrderByAggregateInput
    _avg?: CouponUsageAvgOrderByAggregateInput
    _max?: CouponUsageMaxOrderByAggregateInput
    _min?: CouponUsageMinOrderByAggregateInput
    _sum?: CouponUsageSumOrderByAggregateInput
  }

  export type CouponUsageScalarWhereWithAggregatesInput = {
    AND?: CouponUsageScalarWhereWithAggregatesInput | CouponUsageScalarWhereWithAggregatesInput[]
    OR?: CouponUsageScalarWhereWithAggregatesInput[]
    NOT?: CouponUsageScalarWhereWithAggregatesInput | CouponUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CouponUsage"> | string
    couponId?: StringWithAggregatesFilter<"CouponUsage"> | string
    clientId?: StringWithAggregatesFilter<"CouponUsage"> | string
    clientName?: StringWithAggregatesFilter<"CouponUsage"> | string
    orderId?: StringNullableWithAggregatesFilter<"CouponUsage"> | string | null
    invoiceId?: StringNullableWithAggregatesFilter<"CouponUsage"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"CouponUsage"> | string | null
    discountAmount?: DecimalWithAggregatesFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeWithAggregatesFilter<"CouponUsage"> | Date | string
  }

  export type TaxConfigWhereInput = {
    AND?: TaxConfigWhereInput | TaxConfigWhereInput[]
    OR?: TaxConfigWhereInput[]
    NOT?: TaxConfigWhereInput | TaxConfigWhereInput[]
    id?: StringFilter<"TaxConfig"> | string
    name?: StringFilter<"TaxConfig"> | string
    code?: StringFilter<"TaxConfig"> | string
    rate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    country?: StringFilter<"TaxConfig"> | string
    states?: StringNullableListFilter<"TaxConfig">
    isDefault?: BoolFilter<"TaxConfig"> | boolean
    isActive?: BoolFilter<"TaxConfig"> | boolean
    description?: StringNullableFilter<"TaxConfig"> | string | null
    createdAt?: DateTimeFilter<"TaxConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TaxConfig"> | Date | string
  }

  export type TaxConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
    country?: SortOrder
    states?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: TaxConfigWhereInput | TaxConfigWhereInput[]
    OR?: TaxConfigWhereInput[]
    NOT?: TaxConfigWhereInput | TaxConfigWhereInput[]
    name?: StringFilter<"TaxConfig"> | string
    rate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    country?: StringFilter<"TaxConfig"> | string
    states?: StringNullableListFilter<"TaxConfig">
    isDefault?: BoolFilter<"TaxConfig"> | boolean
    isActive?: BoolFilter<"TaxConfig"> | boolean
    description?: StringNullableFilter<"TaxConfig"> | string | null
    createdAt?: DateTimeFilter<"TaxConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TaxConfig"> | Date | string
  }, "id" | "code">

  export type TaxConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
    country?: SortOrder
    states?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxConfigCountOrderByAggregateInput
    _avg?: TaxConfigAvgOrderByAggregateInput
    _max?: TaxConfigMaxOrderByAggregateInput
    _min?: TaxConfigMinOrderByAggregateInput
    _sum?: TaxConfigSumOrderByAggregateInput
  }

  export type TaxConfigScalarWhereWithAggregatesInput = {
    AND?: TaxConfigScalarWhereWithAggregatesInput | TaxConfigScalarWhereWithAggregatesInput[]
    OR?: TaxConfigScalarWhereWithAggregatesInput[]
    NOT?: TaxConfigScalarWhereWithAggregatesInput | TaxConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaxConfig"> | string
    name?: StringWithAggregatesFilter<"TaxConfig"> | string
    code?: StringWithAggregatesFilter<"TaxConfig"> | string
    rate?: DecimalWithAggregatesFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalWithAggregatesFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalWithAggregatesFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalWithAggregatesFilter<"TaxConfig"> | Decimal | DecimalJsLike | number | string
    country?: StringWithAggregatesFilter<"TaxConfig"> | string
    states?: StringNullableListFilter<"TaxConfig">
    isDefault?: BoolWithAggregatesFilter<"TaxConfig"> | boolean
    isActive?: BoolWithAggregatesFilter<"TaxConfig"> | boolean
    description?: StringNullableWithAggregatesFilter<"TaxConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaxConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaxConfig"> | Date | string
  }

  export type PaymentGatewayConfigWhereInput = {
    AND?: PaymentGatewayConfigWhereInput | PaymentGatewayConfigWhereInput[]
    OR?: PaymentGatewayConfigWhereInput[]
    NOT?: PaymentGatewayConfigWhereInput | PaymentGatewayConfigWhereInput[]
    id?: StringFilter<"PaymentGatewayConfig"> | string
    name?: StringFilter<"PaymentGatewayConfig"> | string
    code?: StringFilter<"PaymentGatewayConfig"> | string
    apiKey?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    apiSecret?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    webhookSecret?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    merchantId?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    isActive?: BoolFilter<"PaymentGatewayConfig"> | boolean
    isDefault?: BoolFilter<"PaymentGatewayConfig"> | boolean
    testMode?: BoolFilter<"PaymentGatewayConfig"> | boolean
    supportedMethods?: StringNullableListFilter<"PaymentGatewayConfig">
    transactionFeePercent?: DecimalFilter<"PaymentGatewayConfig"> | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalFilter<"PaymentGatewayConfig"> | Decimal | DecimalJsLike | number | string
    callbackUrl?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    webhookUrl?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    createdAt?: DateTimeFilter<"PaymentGatewayConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentGatewayConfig"> | Date | string
  }

  export type PaymentGatewayConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    apiSecret?: SortOrderInput | SortOrder
    webhookSecret?: SortOrderInput | SortOrder
    merchantId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    testMode?: SortOrder
    supportedMethods?: SortOrder
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
    callbackUrl?: SortOrderInput | SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentGatewayConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PaymentGatewayConfigWhereInput | PaymentGatewayConfigWhereInput[]
    OR?: PaymentGatewayConfigWhereInput[]
    NOT?: PaymentGatewayConfigWhereInput | PaymentGatewayConfigWhereInput[]
    name?: StringFilter<"PaymentGatewayConfig"> | string
    apiKey?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    apiSecret?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    webhookSecret?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    merchantId?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    isActive?: BoolFilter<"PaymentGatewayConfig"> | boolean
    isDefault?: BoolFilter<"PaymentGatewayConfig"> | boolean
    testMode?: BoolFilter<"PaymentGatewayConfig"> | boolean
    supportedMethods?: StringNullableListFilter<"PaymentGatewayConfig">
    transactionFeePercent?: DecimalFilter<"PaymentGatewayConfig"> | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalFilter<"PaymentGatewayConfig"> | Decimal | DecimalJsLike | number | string
    callbackUrl?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    webhookUrl?: StringNullableFilter<"PaymentGatewayConfig"> | string | null
    createdAt?: DateTimeFilter<"PaymentGatewayConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentGatewayConfig"> | Date | string
  }, "id" | "code">

  export type PaymentGatewayConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    apiSecret?: SortOrderInput | SortOrder
    webhookSecret?: SortOrderInput | SortOrder
    merchantId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    testMode?: SortOrder
    supportedMethods?: SortOrder
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
    callbackUrl?: SortOrderInput | SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentGatewayConfigCountOrderByAggregateInput
    _avg?: PaymentGatewayConfigAvgOrderByAggregateInput
    _max?: PaymentGatewayConfigMaxOrderByAggregateInput
    _min?: PaymentGatewayConfigMinOrderByAggregateInput
    _sum?: PaymentGatewayConfigSumOrderByAggregateInput
  }

  export type PaymentGatewayConfigScalarWhereWithAggregatesInput = {
    AND?: PaymentGatewayConfigScalarWhereWithAggregatesInput | PaymentGatewayConfigScalarWhereWithAggregatesInput[]
    OR?: PaymentGatewayConfigScalarWhereWithAggregatesInput[]
    NOT?: PaymentGatewayConfigScalarWhereWithAggregatesInput | PaymentGatewayConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentGatewayConfig"> | string
    name?: StringWithAggregatesFilter<"PaymentGatewayConfig"> | string
    code?: StringWithAggregatesFilter<"PaymentGatewayConfig"> | string
    apiKey?: StringNullableWithAggregatesFilter<"PaymentGatewayConfig"> | string | null
    apiSecret?: StringNullableWithAggregatesFilter<"PaymentGatewayConfig"> | string | null
    webhookSecret?: StringNullableWithAggregatesFilter<"PaymentGatewayConfig"> | string | null
    merchantId?: StringNullableWithAggregatesFilter<"PaymentGatewayConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"PaymentGatewayConfig"> | boolean
    isDefault?: BoolWithAggregatesFilter<"PaymentGatewayConfig"> | boolean
    testMode?: BoolWithAggregatesFilter<"PaymentGatewayConfig"> | boolean
    supportedMethods?: StringNullableListFilter<"PaymentGatewayConfig">
    transactionFeePercent?: DecimalWithAggregatesFilter<"PaymentGatewayConfig"> | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalWithAggregatesFilter<"PaymentGatewayConfig"> | Decimal | DecimalJsLike | number | string
    callbackUrl?: StringNullableWithAggregatesFilter<"PaymentGatewayConfig"> | string | null
    webhookUrl?: StringNullableWithAggregatesFilter<"PaymentGatewayConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentGatewayConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentGatewayConfig"> | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateInput = {
    id?: string
    productId?: string | null
    productName: string
    productCode?: string | null
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    description?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: string
    invoiceId: string
    productId?: string | null
    productName: string
    productCode?: string | null
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    description?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInput = {
    id?: string
    invoiceId: string
    productId?: string | null
    productName: string
    productCode?: string | null
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    description?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    orderId?: string | null
    subscriptionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    gatewayName?: string | null
    gatewayTxnId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: string | null
    bankAccount?: string | null
    bankReference?: string | null
    chequeNumber?: string | null
    chequeDate?: Date | string | null
    chequeBank?: string | null
    refundedAmount?: Decimal | DecimalJsLike | number | string
    refundReason?: string | null
    refundedAt?: Date | string | null
    refundedById?: string | null
    refundedByName?: string | null
    processedAt?: Date | string | null
    processedById?: string | null
    processedByName?: string | null
    failureReason?: string | null
    failureCode?: string | null
    notes?: string | null
    internalNotes?: string | null
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    invoiceId?: string | null
    orderId?: string | null
    subscriptionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    gatewayName?: string | null
    gatewayTxnId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: string | null
    bankAccount?: string | null
    bankReference?: string | null
    chequeNumber?: string | null
    chequeDate?: Date | string | null
    chequeBank?: string | null
    refundedAmount?: Decimal | DecimalJsLike | number | string
    refundReason?: string | null
    refundedAt?: Date | string | null
    refundedById?: string | null
    refundedByName?: string | null
    processedAt?: Date | string | null
    processedById?: string | null
    processedByName?: string | null
    failureReason?: string | null
    failureCode?: string | null
    notes?: string | null
    internalNotes?: string | null
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    invoiceId?: string | null
    orderId?: string | null
    subscriptionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    gatewayName?: string | null
    gatewayTxnId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: string | null
    bankAccount?: string | null
    bankReference?: string | null
    chequeNumber?: string | null
    chequeDate?: Date | string | null
    chequeBank?: string | null
    refundedAmount?: Decimal | DecimalJsLike | number | string
    refundReason?: string | null
    refundedAt?: Date | string | null
    refundedById?: string | null
    refundedByName?: string | null
    processedAt?: Date | string | null
    processedById?: string | null
    processedByName?: string | null
    failureReason?: string | null
    failureCode?: string | null
    notes?: string | null
    internalNotes?: string | null
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    type?: $Enums.CouponType
    value: Decimal | DecimalJsLike | number | string
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CouponStatus
    startDate?: Date | string
    endDate?: Date | string | null
    maxUses?: number | null
    maxUsesPerClient?: number | null
    currentUses?: number
    applicableProducts?: CouponCreateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponCreateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponCreateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usages?: CouponUsageCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    type?: $Enums.CouponType
    value: Decimal | DecimalJsLike | number | string
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CouponStatus
    startDate?: Date | string
    endDate?: Date | string | null
    maxUses?: number | null
    maxUsesPerClient?: number | null
    currentUses?: number
    applicableProducts?: CouponCreateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponCreateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponCreateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usages?: CouponUsageUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsesPerClient?: NullableIntFieldUpdateOperationsInput | number | null
    currentUses?: IntFieldUpdateOperationsInput | number
    applicableProducts?: CouponUpdateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponUpdateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponUpdateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: BoolFieldUpdateOperationsInput | boolean
    isRenewalApplicable?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usages?: CouponUsageUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsesPerClient?: NullableIntFieldUpdateOperationsInput | number | null
    currentUses?: IntFieldUpdateOperationsInput | number
    applicableProducts?: CouponUpdateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponUpdateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponUpdateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: BoolFieldUpdateOperationsInput | boolean
    isRenewalApplicable?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usages?: CouponUsageUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type CouponCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    type?: $Enums.CouponType
    value: Decimal | DecimalJsLike | number | string
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CouponStatus
    startDate?: Date | string
    endDate?: Date | string | null
    maxUses?: number | null
    maxUsesPerClient?: number | null
    currentUses?: number
    applicableProducts?: CouponCreateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponCreateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponCreateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsesPerClient?: NullableIntFieldUpdateOperationsInput | number | null
    currentUses?: IntFieldUpdateOperationsInput | number
    applicableProducts?: CouponUpdateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponUpdateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponUpdateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: BoolFieldUpdateOperationsInput | boolean
    isRenewalApplicable?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsesPerClient?: NullableIntFieldUpdateOperationsInput | number | null
    currentUses?: IntFieldUpdateOperationsInput | number
    applicableProducts?: CouponUpdateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponUpdateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponUpdateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: BoolFieldUpdateOperationsInput | boolean
    isRenewalApplicable?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUsageCreateInput = {
    id?: string
    clientId: string
    clientName: string
    orderId?: string | null
    invoiceId?: string | null
    subscriptionId?: string | null
    discountAmount: Decimal | DecimalJsLike | number | string
    usedAt?: Date | string
    coupon: CouponCreateNestedOneWithoutUsagesInput
  }

  export type CouponUsageUncheckedCreateInput = {
    id?: string
    couponId: string
    clientId: string
    clientName: string
    orderId?: string | null
    invoiceId?: string | null
    subscriptionId?: string | null
    discountAmount: Decimal | DecimalJsLike | number | string
    usedAt?: Date | string
  }

  export type CouponUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupon?: CouponUpdateOneRequiredWithoutUsagesNestedInput
  }

  export type CouponUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUsageCreateManyInput = {
    id?: string
    couponId: string
    clientId: string
    clientName: string
    orderId?: string | null
    invoiceId?: string | null
    subscriptionId?: string | null
    discountAmount: Decimal | DecimalJsLike | number | string
    usedAt?: Date | string
  }

  export type CouponUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxConfigCreateInput = {
    id?: string
    name: string
    code: string
    rate: Decimal | DecimalJsLike | number | string
    cgstRate?: Decimal | DecimalJsLike | number | string
    sgstRate?: Decimal | DecimalJsLike | number | string
    igstRate?: Decimal | DecimalJsLike | number | string
    country?: string
    states?: TaxConfigCreatestatesInput | string[]
    isDefault?: boolean
    isActive?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxConfigUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    rate: Decimal | DecimalJsLike | number | string
    cgstRate?: Decimal | DecimalJsLike | number | string
    sgstRate?: Decimal | DecimalJsLike | number | string
    igstRate?: Decimal | DecimalJsLike | number | string
    country?: string
    states?: TaxConfigCreatestatesInput | string[]
    isDefault?: boolean
    isActive?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    country?: StringFieldUpdateOperationsInput | string
    states?: TaxConfigUpdatestatesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    country?: StringFieldUpdateOperationsInput | string
    states?: TaxConfigUpdatestatesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxConfigCreateManyInput = {
    id?: string
    name: string
    code: string
    rate: Decimal | DecimalJsLike | number | string
    cgstRate?: Decimal | DecimalJsLike | number | string
    sgstRate?: Decimal | DecimalJsLike | number | string
    igstRate?: Decimal | DecimalJsLike | number | string
    country?: string
    states?: TaxConfigCreatestatesInput | string[]
    isDefault?: boolean
    isActive?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    country?: StringFieldUpdateOperationsInput | string
    states?: TaxConfigUpdatestatesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igstRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    country?: StringFieldUpdateOperationsInput | string
    states?: TaxConfigUpdatestatesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentGatewayConfigCreateInput = {
    id?: string
    name: string
    code: string
    apiKey?: string | null
    apiSecret?: string | null
    webhookSecret?: string | null
    merchantId?: string | null
    isActive?: boolean
    isDefault?: boolean
    testMode?: boolean
    supportedMethods?: PaymentGatewayConfigCreatesupportedMethodsInput | string[]
    transactionFeePercent?: Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: Decimal | DecimalJsLike | number | string
    callbackUrl?: string | null
    webhookUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentGatewayConfigUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    apiKey?: string | null
    apiSecret?: string | null
    webhookSecret?: string | null
    merchantId?: string | null
    isActive?: boolean
    isDefault?: boolean
    testMode?: boolean
    supportedMethods?: PaymentGatewayConfigCreatesupportedMethodsInput | string[]
    transactionFeePercent?: Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: Decimal | DecimalJsLike | number | string
    callbackUrl?: string | null
    webhookUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentGatewayConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiSecret?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    testMode?: BoolFieldUpdateOperationsInput | boolean
    supportedMethods?: PaymentGatewayConfigUpdatesupportedMethodsInput | string[]
    transactionFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    callbackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentGatewayConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiSecret?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    testMode?: BoolFieldUpdateOperationsInput | boolean
    supportedMethods?: PaymentGatewayConfigUpdatesupportedMethodsInput | string[]
    transactionFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    callbackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentGatewayConfigCreateManyInput = {
    id?: string
    name: string
    code: string
    apiKey?: string | null
    apiSecret?: string | null
    webhookSecret?: string | null
    merchantId?: string | null
    isActive?: boolean
    isDefault?: boolean
    testMode?: boolean
    supportedMethods?: PaymentGatewayConfigCreatesupportedMethodsInput | string[]
    transactionFeePercent?: Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: Decimal | DecimalJsLike | number | string
    callbackUrl?: string | null
    webhookUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentGatewayConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiSecret?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    testMode?: BoolFieldUpdateOperationsInput | boolean
    supportedMethods?: PaymentGatewayConfigUpdatesupportedMethodsInput | string[]
    transactionFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    callbackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentGatewayConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiSecret?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    merchantId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    testMode?: BoolFieldUpdateOperationsInput | boolean
    supportedMethods?: PaymentGatewayConfigUpdatesupportedMethodsInput | string[]
    transactionFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    callbackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrder
    clientCompany?: SortOrder
    billingAddress?: SortOrder
    billingCity?: SortOrder
    billingState?: SortOrder
    billingCountry?: SortOrder
    billingZipCode?: SortOrder
    gstin?: SortOrder
    orderId?: SortOrder
    orderNumber?: SortOrder
    subscriptionId?: SortOrder
    invoiceDate?: SortOrder
    dueDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrder
    couponCode?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    currency?: SortOrder
    notes?: SortOrder
    termsAndConditions?: SortOrder
    internalNotes?: SortOrder
    sentAt?: SortOrder
    sentBy?: SortOrder
    sentByName?: SortOrder
    paidAt?: SortOrder
    cancelledAt?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    pdfUrl?: SortOrder
    pdfGeneratedAt?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    updatedById?: SortOrder
    updatedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrder
    clientCompany?: SortOrder
    billingAddress?: SortOrder
    billingCity?: SortOrder
    billingState?: SortOrder
    billingCountry?: SortOrder
    billingZipCode?: SortOrder
    gstin?: SortOrder
    orderId?: SortOrder
    orderNumber?: SortOrder
    subscriptionId?: SortOrder
    invoiceDate?: SortOrder
    dueDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrder
    couponCode?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    currency?: SortOrder
    notes?: SortOrder
    termsAndConditions?: SortOrder
    internalNotes?: SortOrder
    sentAt?: SortOrder
    sentBy?: SortOrder
    sentByName?: SortOrder
    paidAt?: SortOrder
    cancelledAt?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    pdfUrl?: SortOrder
    pdfGeneratedAt?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    updatedById?: SortOrder
    updatedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    clientPhone?: SortOrder
    clientCompany?: SortOrder
    billingAddress?: SortOrder
    billingCity?: SortOrder
    billingState?: SortOrder
    billingCountry?: SortOrder
    billingZipCode?: SortOrder
    gstin?: SortOrder
    orderId?: SortOrder
    orderNumber?: SortOrder
    subscriptionId?: SortOrder
    invoiceDate?: SortOrder
    dueDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponId?: SortOrder
    couponCode?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
    currency?: SortOrder
    notes?: SortOrder
    termsAndConditions?: SortOrder
    internalNotes?: SortOrder
    sentAt?: SortOrder
    sentBy?: SortOrder
    sentByName?: SortOrder
    paidAt?: SortOrder
    cancelledAt?: SortOrder
    cancelReason?: SortOrder
    cancelledById?: SortOrder
    cancelledByName?: SortOrder
    pdfUrl?: SortOrder
    pdfGeneratedAt?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    updatedById?: SortOrder
    updatedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    subtotal?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    couponDiscount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    igst?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balanceAmount?: SortOrder
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

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    discountPercent?: SortOrder
    discountAmount?: SortOrder
    taxPercent?: SortOrder
    taxAmount?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
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

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InvoiceNullableRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    invoiceId?: SortOrder
    orderId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    gatewayName?: SortOrder
    gatewayTxnId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewayResponse?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
    bankReference?: SortOrder
    chequeNumber?: SortOrder
    chequeDate?: SortOrder
    chequeBank?: SortOrder
    refundedAmount?: SortOrder
    refundReason?: SortOrder
    refundedAt?: SortOrder
    refundedById?: SortOrder
    refundedByName?: SortOrder
    processedAt?: SortOrder
    processedById?: SortOrder
    processedByName?: SortOrder
    failureReason?: SortOrder
    failureCode?: SortOrder
    notes?: SortOrder
    internalNotes?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    refundedAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    invoiceId?: SortOrder
    orderId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    gatewayName?: SortOrder
    gatewayTxnId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
    bankReference?: SortOrder
    chequeNumber?: SortOrder
    chequeDate?: SortOrder
    chequeBank?: SortOrder
    refundedAmount?: SortOrder
    refundReason?: SortOrder
    refundedAt?: SortOrder
    refundedById?: SortOrder
    refundedByName?: SortOrder
    processedAt?: SortOrder
    processedById?: SortOrder
    processedByName?: SortOrder
    failureReason?: SortOrder
    failureCode?: SortOrder
    notes?: SortOrder
    internalNotes?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    invoiceId?: SortOrder
    orderId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    gatewayName?: SortOrder
    gatewayTxnId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
    bankReference?: SortOrder
    chequeNumber?: SortOrder
    chequeDate?: SortOrder
    chequeBank?: SortOrder
    refundedAmount?: SortOrder
    refundReason?: SortOrder
    refundedAt?: SortOrder
    refundedById?: SortOrder
    refundedByName?: SortOrder
    processedAt?: SortOrder
    processedById?: SortOrder
    processedByName?: SortOrder
    failureReason?: SortOrder
    failureCode?: SortOrder
    notes?: SortOrder
    internalNotes?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    refundedAmount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumCouponTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponType | EnumCouponTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponTypeFilter<$PrismaModel> | $Enums.CouponType
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

  export type EnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CouponUsageListRelationFilter = {
    every?: CouponUsageWhereInput
    some?: CouponUsageWhereInput
    none?: CouponUsageWhereInput
  }

  export type CouponUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxDiscount?: SortOrder
    minOrderAmount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxUses?: SortOrder
    maxUsesPerClient?: SortOrder
    currentUses?: SortOrder
    applicableProducts?: SortOrder
    applicableLicenseTypes?: SortOrder
    applicableClients?: SortOrder
    isFirstPurchaseOnly?: SortOrder
    isRenewalApplicable?: SortOrder
    isStackable?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    value?: SortOrder
    maxDiscount?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    maxUsesPerClient?: SortOrder
    currentUses?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxDiscount?: SortOrder
    minOrderAmount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxUses?: SortOrder
    maxUsesPerClient?: SortOrder
    currentUses?: SortOrder
    isFirstPurchaseOnly?: SortOrder
    isRenewalApplicable?: SortOrder
    isStackable?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxDiscount?: SortOrder
    minOrderAmount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxUses?: SortOrder
    maxUsesPerClient?: SortOrder
    currentUses?: SortOrder
    isFirstPurchaseOnly?: SortOrder
    isRenewalApplicable?: SortOrder
    isStackable?: SortOrder
    createdById?: SortOrder
    createdByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    value?: SortOrder
    maxDiscount?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    maxUsesPerClient?: SortOrder
    currentUses?: SortOrder
  }

  export type EnumCouponTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponType | EnumCouponTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponTypeWithAggregatesFilter<$PrismaModel> | $Enums.CouponType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponTypeFilter<$PrismaModel>
    _max?: NestedEnumCouponTypeFilter<$PrismaModel>
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

  export type EnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CouponRelationFilter = {
    is?: CouponWhereInput
    isNot?: CouponWhereInput
  }

  export type CouponUsageCountOrderByAggregateInput = {
    id?: SortOrder
    couponId?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    orderId?: SortOrder
    invoiceId?: SortOrder
    subscriptionId?: SortOrder
    discountAmount?: SortOrder
    usedAt?: SortOrder
  }

  export type CouponUsageAvgOrderByAggregateInput = {
    discountAmount?: SortOrder
  }

  export type CouponUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    couponId?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    orderId?: SortOrder
    invoiceId?: SortOrder
    subscriptionId?: SortOrder
    discountAmount?: SortOrder
    usedAt?: SortOrder
  }

  export type CouponUsageMinOrderByAggregateInput = {
    id?: SortOrder
    couponId?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    orderId?: SortOrder
    invoiceId?: SortOrder
    subscriptionId?: SortOrder
    discountAmount?: SortOrder
    usedAt?: SortOrder
  }

  export type CouponUsageSumOrderByAggregateInput = {
    discountAmount?: SortOrder
  }

  export type TaxConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
    country?: SortOrder
    states?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxConfigAvgOrderByAggregateInput = {
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
  }

  export type TaxConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
    country?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
    country?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxConfigSumOrderByAggregateInput = {
    rate?: SortOrder
    cgstRate?: SortOrder
    sgstRate?: SortOrder
    igstRate?: SortOrder
  }

  export type PaymentGatewayConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    webhookSecret?: SortOrder
    merchantId?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    testMode?: SortOrder
    supportedMethods?: SortOrder
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
    callbackUrl?: SortOrder
    webhookUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentGatewayConfigAvgOrderByAggregateInput = {
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
  }

  export type PaymentGatewayConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    webhookSecret?: SortOrder
    merchantId?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    testMode?: SortOrder
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
    callbackUrl?: SortOrder
    webhookUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentGatewayConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    webhookSecret?: SortOrder
    merchantId?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    testMode?: SortOrder
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
    callbackUrl?: SortOrder
    webhookUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentGatewayConfigSumOrderByAggregateInput = {
    transactionFeePercent?: SortOrder
    transactionFeeFixed?: SortOrder
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type InvoiceUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type CouponCreateapplicableProductsInput = {
    set: string[]
  }

  export type CouponCreateapplicableLicenseTypesInput = {
    set: string[]
  }

  export type CouponCreateapplicableClientsInput = {
    set: string[]
  }

  export type CouponUsageCreateNestedManyWithoutCouponInput = {
    create?: XOR<CouponUsageCreateWithoutCouponInput, CouponUsageUncheckedCreateWithoutCouponInput> | CouponUsageCreateWithoutCouponInput[] | CouponUsageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUsageCreateOrConnectWithoutCouponInput | CouponUsageCreateOrConnectWithoutCouponInput[]
    createMany?: CouponUsageCreateManyCouponInputEnvelope
    connect?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
  }

  export type CouponUsageUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<CouponUsageCreateWithoutCouponInput, CouponUsageUncheckedCreateWithoutCouponInput> | CouponUsageCreateWithoutCouponInput[] | CouponUsageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUsageCreateOrConnectWithoutCouponInput | CouponUsageCreateOrConnectWithoutCouponInput[]
    createMany?: CouponUsageCreateManyCouponInputEnvelope
    connect?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
  }

  export type EnumCouponTypeFieldUpdateOperationsInput = {
    set?: $Enums.CouponType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumCouponStatusFieldUpdateOperationsInput = {
    set?: $Enums.CouponStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CouponUpdateapplicableProductsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CouponUpdateapplicableLicenseTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CouponUpdateapplicableClientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CouponUsageUpdateManyWithoutCouponNestedInput = {
    create?: XOR<CouponUsageCreateWithoutCouponInput, CouponUsageUncheckedCreateWithoutCouponInput> | CouponUsageCreateWithoutCouponInput[] | CouponUsageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUsageCreateOrConnectWithoutCouponInput | CouponUsageCreateOrConnectWithoutCouponInput[]
    upsert?: CouponUsageUpsertWithWhereUniqueWithoutCouponInput | CouponUsageUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: CouponUsageCreateManyCouponInputEnvelope
    set?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    disconnect?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    delete?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    connect?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    update?: CouponUsageUpdateWithWhereUniqueWithoutCouponInput | CouponUsageUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: CouponUsageUpdateManyWithWhereWithoutCouponInput | CouponUsageUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: CouponUsageScalarWhereInput | CouponUsageScalarWhereInput[]
  }

  export type CouponUsageUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<CouponUsageCreateWithoutCouponInput, CouponUsageUncheckedCreateWithoutCouponInput> | CouponUsageCreateWithoutCouponInput[] | CouponUsageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUsageCreateOrConnectWithoutCouponInput | CouponUsageCreateOrConnectWithoutCouponInput[]
    upsert?: CouponUsageUpsertWithWhereUniqueWithoutCouponInput | CouponUsageUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: CouponUsageCreateManyCouponInputEnvelope
    set?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    disconnect?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    delete?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    connect?: CouponUsageWhereUniqueInput | CouponUsageWhereUniqueInput[]
    update?: CouponUsageUpdateWithWhereUniqueWithoutCouponInput | CouponUsageUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: CouponUsageUpdateManyWithWhereWithoutCouponInput | CouponUsageUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: CouponUsageScalarWhereInput | CouponUsageScalarWhereInput[]
  }

  export type CouponCreateNestedOneWithoutUsagesInput = {
    create?: XOR<CouponCreateWithoutUsagesInput, CouponUncheckedCreateWithoutUsagesInput>
    connectOrCreate?: CouponCreateOrConnectWithoutUsagesInput
    connect?: CouponWhereUniqueInput
  }

  export type CouponUpdateOneRequiredWithoutUsagesNestedInput = {
    create?: XOR<CouponCreateWithoutUsagesInput, CouponUncheckedCreateWithoutUsagesInput>
    connectOrCreate?: CouponCreateOrConnectWithoutUsagesInput
    upsert?: CouponUpsertWithoutUsagesInput
    connect?: CouponWhereUniqueInput
    update?: XOR<XOR<CouponUpdateToOneWithWhereWithoutUsagesInput, CouponUpdateWithoutUsagesInput>, CouponUncheckedUpdateWithoutUsagesInput>
  }

  export type TaxConfigCreatestatesInput = {
    set: string[]
  }

  export type TaxConfigUpdatestatesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PaymentGatewayConfigCreatesupportedMethodsInput = {
    set: string[]
  }

  export type PaymentGatewayConfigUpdatesupportedMethodsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCouponTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponType | EnumCouponTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponTypeFilter<$PrismaModel> | $Enums.CouponType
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

  export type NestedEnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCouponTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponType | EnumCouponTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponType[] | ListEnumCouponTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponTypeWithAggregatesFilter<$PrismaModel> | $Enums.CouponType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponTypeFilter<$PrismaModel>
    _max?: NestedEnumCouponTypeFilter<$PrismaModel>
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

  export type NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    productId?: string | null
    productName: string
    productCode?: string | null
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    description?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    productId?: string | null
    productName: string
    productCode?: string | null
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    description?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    orderId?: string | null
    subscriptionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    gatewayName?: string | null
    gatewayTxnId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: string | null
    bankAccount?: string | null
    bankReference?: string | null
    chequeNumber?: string | null
    chequeDate?: Date | string | null
    chequeBank?: string | null
    refundedAmount?: Decimal | DecimalJsLike | number | string
    refundReason?: string | null
    refundedAt?: Date | string | null
    refundedById?: string | null
    refundedByName?: string | null
    processedAt?: Date | string | null
    processedById?: string | null
    processedByName?: string | null
    failureReason?: string | null
    failureCode?: string | null
    notes?: string | null
    internalNotes?: string | null
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    orderId?: string | null
    subscriptionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    gatewayName?: string | null
    gatewayTxnId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: string | null
    bankAccount?: string | null
    bankReference?: string | null
    chequeNumber?: string | null
    chequeDate?: Date | string | null
    chequeBank?: string | null
    refundedAmount?: Decimal | DecimalJsLike | number | string
    refundReason?: string | null
    refundedAt?: Date | string | null
    refundedById?: string | null
    refundedByName?: string | null
    processedAt?: Date | string | null
    processedById?: string | null
    processedByName?: string | null
    failureReason?: string | null
    failureCode?: string | null
    notes?: string | null
    internalNotes?: string | null
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    productId?: StringNullableFilter<"InvoiceItem"> | string | null
    productName?: StringFilter<"InvoiceItem"> | string
    productCode?: StringNullableFilter<"InvoiceItem"> | string | null
    licenseTypeId?: StringNullableFilter<"InvoiceItem"> | string | null
    licenseTypeName?: StringNullableFilter<"InvoiceItem"> | string | null
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: IntFilter<"InvoiceItem"> | number
    unitPrice?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    periodStart?: DateTimeNullableFilter<"InvoiceItem"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"InvoiceItem"> | Date | string | null
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceItem"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    paymentNumber?: StringFilter<"Payment"> | string
    clientId?: StringFilter<"Payment"> | string
    clientName?: StringFilter<"Payment"> | string
    clientEmail?: StringNullableFilter<"Payment"> | string | null
    invoiceId?: StringNullableFilter<"Payment"> | string | null
    orderId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gatewayName?: StringNullableFilter<"Payment"> | string | null
    gatewayTxnId?: StringNullableFilter<"Payment"> | string | null
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    bankName?: StringNullableFilter<"Payment"> | string | null
    bankAccount?: StringNullableFilter<"Payment"> | string | null
    bankReference?: StringNullableFilter<"Payment"> | string | null
    chequeNumber?: StringNullableFilter<"Payment"> | string | null
    chequeDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    chequeBank?: StringNullableFilter<"Payment"> | string | null
    refundedAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    refundReason?: StringNullableFilter<"Payment"> | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedById?: StringNullableFilter<"Payment"> | string | null
    refundedByName?: StringNullableFilter<"Payment"> | string | null
    processedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    processedById?: StringNullableFilter<"Payment"> | string | null
    processedByName?: StringNullableFilter<"Payment"> | string | null
    failureReason?: StringNullableFilter<"Payment"> | string | null
    failureCode?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    internalNotes?: StringNullableFilter<"Payment"> | string | null
    createdById?: StringNullableFilter<"Payment"> | string | null
    createdByName?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type InvoiceCreateWithoutItemsInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    clientPhone?: string | null
    clientCompany?: string | null
    billingAddress?: string | null
    billingCity?: string | null
    billingState?: string | null
    billingCountry?: string | null
    billingZipCode?: string | null
    gstin?: string | null
    orderId?: string | null
    orderNumber?: string | null
    subscriptionId?: string | null
    invoiceDate?: Date | string
    dueDate: Date | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    couponId?: string | null
    couponCode?: string | null
    couponDiscount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    cgst?: Decimal | DecimalJsLike | number | string
    sgst?: Decimal | DecimalJsLike | number | string
    igst?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balanceAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    notes?: string | null
    termsAndConditions?: string | null
    internalNotes?: string | null
    sentAt?: Date | string | null
    sentBy?: string | null
    sentByName?: string | null
    paidAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelReason?: string | null
    cancelledById?: string | null
    cancelledByName?: string | null
    pdfUrl?: string | null
    pdfGeneratedAt?: Date | string | null
    createdById?: string | null
    createdByName?: string | null
    updatedById?: string | null
    updatedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clientCompany?: NullableStringFieldUpdateOperationsInput | string | null
    billingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    billingCity?: NullableStringFieldUpdateOperationsInput | string | null
    billingState?: NullableStringFieldUpdateOperationsInput | string | null
    billingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    billingZipCode?: NullableStringFieldUpdateOperationsInput | string | null
    gstin?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sgst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    termsAndConditions?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentBy?: NullableStringFieldUpdateOperationsInput | string | null
    sentByName?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledById?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledByName?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type CouponUsageCreateWithoutCouponInput = {
    id?: string
    clientId: string
    clientName: string
    orderId?: string | null
    invoiceId?: string | null
    subscriptionId?: string | null
    discountAmount: Decimal | DecimalJsLike | number | string
    usedAt?: Date | string
  }

  export type CouponUsageUncheckedCreateWithoutCouponInput = {
    id?: string
    clientId: string
    clientName: string
    orderId?: string | null
    invoiceId?: string | null
    subscriptionId?: string | null
    discountAmount: Decimal | DecimalJsLike | number | string
    usedAt?: Date | string
  }

  export type CouponUsageCreateOrConnectWithoutCouponInput = {
    where: CouponUsageWhereUniqueInput
    create: XOR<CouponUsageCreateWithoutCouponInput, CouponUsageUncheckedCreateWithoutCouponInput>
  }

  export type CouponUsageCreateManyCouponInputEnvelope = {
    data: CouponUsageCreateManyCouponInput | CouponUsageCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type CouponUsageUpsertWithWhereUniqueWithoutCouponInput = {
    where: CouponUsageWhereUniqueInput
    update: XOR<CouponUsageUpdateWithoutCouponInput, CouponUsageUncheckedUpdateWithoutCouponInput>
    create: XOR<CouponUsageCreateWithoutCouponInput, CouponUsageUncheckedCreateWithoutCouponInput>
  }

  export type CouponUsageUpdateWithWhereUniqueWithoutCouponInput = {
    where: CouponUsageWhereUniqueInput
    data: XOR<CouponUsageUpdateWithoutCouponInput, CouponUsageUncheckedUpdateWithoutCouponInput>
  }

  export type CouponUsageUpdateManyWithWhereWithoutCouponInput = {
    where: CouponUsageScalarWhereInput
    data: XOR<CouponUsageUpdateManyMutationInput, CouponUsageUncheckedUpdateManyWithoutCouponInput>
  }

  export type CouponUsageScalarWhereInput = {
    AND?: CouponUsageScalarWhereInput | CouponUsageScalarWhereInput[]
    OR?: CouponUsageScalarWhereInput[]
    NOT?: CouponUsageScalarWhereInput | CouponUsageScalarWhereInput[]
    id?: StringFilter<"CouponUsage"> | string
    couponId?: StringFilter<"CouponUsage"> | string
    clientId?: StringFilter<"CouponUsage"> | string
    clientName?: StringFilter<"CouponUsage"> | string
    orderId?: StringNullableFilter<"CouponUsage"> | string | null
    invoiceId?: StringNullableFilter<"CouponUsage"> | string | null
    subscriptionId?: StringNullableFilter<"CouponUsage"> | string | null
    discountAmount?: DecimalFilter<"CouponUsage"> | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFilter<"CouponUsage"> | Date | string
  }

  export type CouponCreateWithoutUsagesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    type?: $Enums.CouponType
    value: Decimal | DecimalJsLike | number | string
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CouponStatus
    startDate?: Date | string
    endDate?: Date | string | null
    maxUses?: number | null
    maxUsesPerClient?: number | null
    currentUses?: number
    applicableProducts?: CouponCreateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponCreateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponCreateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutUsagesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    type?: $Enums.CouponType
    value: Decimal | DecimalJsLike | number | string
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CouponStatus
    startDate?: Date | string
    endDate?: Date | string | null
    maxUses?: number | null
    maxUsesPerClient?: number | null
    currentUses?: number
    applicableProducts?: CouponCreateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponCreateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponCreateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: boolean
    isRenewalApplicable?: boolean
    isStackable?: boolean
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutUsagesInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutUsagesInput, CouponUncheckedCreateWithoutUsagesInput>
  }

  export type CouponUpsertWithoutUsagesInput = {
    update: XOR<CouponUpdateWithoutUsagesInput, CouponUncheckedUpdateWithoutUsagesInput>
    create: XOR<CouponCreateWithoutUsagesInput, CouponUncheckedCreateWithoutUsagesInput>
    where?: CouponWhereInput
  }

  export type CouponUpdateToOneWithWhereWithoutUsagesInput = {
    where?: CouponWhereInput
    data: XOR<CouponUpdateWithoutUsagesInput, CouponUncheckedUpdateWithoutUsagesInput>
  }

  export type CouponUpdateWithoutUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsesPerClient?: NullableIntFieldUpdateOperationsInput | number | null
    currentUses?: IntFieldUpdateOperationsInput | number
    applicableProducts?: CouponUpdateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponUpdateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponUpdateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: BoolFieldUpdateOperationsInput | boolean
    isRenewalApplicable?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOrderAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsesPerClient?: NullableIntFieldUpdateOperationsInput | number | null
    currentUses?: IntFieldUpdateOperationsInput | number
    applicableProducts?: CouponUpdateapplicableProductsInput | string[]
    applicableLicenseTypes?: CouponUpdateapplicableLicenseTypesInput | string[]
    applicableClients?: CouponUpdateapplicableClientsInput | string[]
    isFirstPurchaseOnly?: BoolFieldUpdateOperationsInput | boolean
    isRenewalApplicable?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: string
    productId?: string | null
    productName: string
    productCode?: string | null
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    description?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxPercent?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    paymentNumber: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    orderId?: string | null
    subscriptionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    gatewayName?: string | null
    gatewayTxnId?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: string | null
    bankAccount?: string | null
    bankReference?: string | null
    chequeNumber?: string | null
    chequeDate?: Date | string | null
    chequeBank?: string | null
    refundedAmount?: Decimal | DecimalJsLike | number | string
    refundReason?: string | null
    refundedAt?: Date | string | null
    refundedById?: string | null
    refundedByName?: string | null
    processedAt?: Date | string | null
    processedById?: string | null
    processedByName?: string | null
    failureReason?: string | null
    failureCode?: string | null
    notes?: string | null
    internalNotes?: string | null
    createdById?: string | null
    createdByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gatewayName?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bankReference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chequeBank?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedById?: NullableStringFieldUpdateOperationsInput | string | null
    refundedByName?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    processedByName?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    failureCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUsageCreateManyCouponInput = {
    id?: string
    clientId: string
    clientName: string
    orderId?: string | null
    invoiceId?: string | null
    subscriptionId?: string | null
    discountAmount: Decimal | DecimalJsLike | number | string
    usedAt?: Date | string
  }

  export type CouponUsageUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUsageUncheckedUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUsageUncheckedUpdateManyWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
     */
    export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CouponCountOutputTypeDefaultArgs instead
     */
    export type CouponCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CouponCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceItemDefaultArgs instead
     */
    export type InvoiceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CouponDefaultArgs instead
     */
    export type CouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CouponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CouponUsageDefaultArgs instead
     */
    export type CouponUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CouponUsageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaxConfigDefaultArgs instead
     */
    export type TaxConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaxConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentGatewayConfigDefaultArgs instead
     */
    export type PaymentGatewayConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentGatewayConfigDefaultArgs<ExtArgs>

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