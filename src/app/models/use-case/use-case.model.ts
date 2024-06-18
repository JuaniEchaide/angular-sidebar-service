import { Paginated } from "../domain"

export interface UseCase<T, Q> {
    all(): T[]
    get(filters: Q extends Paginated ? Partial<Q> : Q): T
}