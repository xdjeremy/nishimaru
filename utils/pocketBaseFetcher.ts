import {pocketBase} from "@/utils/pocketbase";

const pocketBaseFetcher = (database: string, query?: any): Promise<any> => {
    return pocketBase.collection(database).getFullList({
        ...query,
    });
}

export {pocketBaseFetcher};