import { UseCase } from "../models/use-case";

export class SearchUseCase implements UseCase<TemplateStringsArray,QueuingStrategy>{
    all(): TemplateStringsArray[] {
        throw new Error("Method not implemented.");
    }
    get(filters: QueuingStrategy<any>): TemplateStringsArray {
        throw new Error("Method not implemented.");
    }
    
}   