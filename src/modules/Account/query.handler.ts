import { EventPublisher, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAccountQuery } from "./query/get-account.query";
import { AccountRepository } from "./Account.repository";

@QueryHandler(GetAccountQuery)
export class AccountQueryHandler implements IQueryHandler<any> {
    constructor(
        private readonly repository: AccountRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    async execute(query: GetAccountQuery, resolve: (value?) => void) {
        const AccountUserResponse = this.publisher.mergeObjectContext(
            await this.repository.GetAccount(query.param),
        );
        return AccountUserResponse;
    }
}