import {SubmissionRecordsItem} from "../../business_logic/submissionVotesRecord";
import getObject from "../local-storage/getObject";
import {APP_LOCAL_STORE_KEY} from "../../constants";

export const getUserState = (userId: string | undefined): SubmissionRecordsItem | null => {
    if (!userId) {
        return null
    } else {
        const appStore = getObject(APP_LOCAL_STORE_KEY)
        if (!appStore) {
            return null
        } else {
            const userState = appStore[userId] as SubmissionRecordsItem|null;
            return userState ? userState : null;
        }
    }
}
