import { Resolver, Query, Float} from "@nestjs/graphql";
import exp = require("constants");


@Resolver()
export class CoreResolver {

    @Query(() => Float) 
    uptime() {
        return process.uptime()
    }
}