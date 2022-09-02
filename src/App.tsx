import "css/global/Global.css";

import {Route, Routes as RoutesImport, BrowserRouter} from "react-router-dom";
import EXAMPLE_SUBMISSIONS, {Submission} from "ExampleSubmissions";
import styles from "css/pages/VotePage.module.css";
import {UserView} from "./views/UserView";
import {BusinessLogicWrapper} from "./business_logic";
import {useState} from "react";

/*
1. display submission in order - done
* 2. allow upvote/downvote on a handler level - done
* 3. add persistance for current user
* 4. make sure you don't show the submission the user has already voted on
* 5. add switching users through the url or whatever
* 6. add admin approval
* 7. add fancy styling
* */


function App() {
    /* current user ID was supposed to be taken from URL with useParams() hook of React Router, to pass it to useEffect as a parameter to get user's state */

    const [currentSubmissionId, setCurrentSubmissionId] = useState<null | string>(EXAMPLE_SUBMISSIONS[0].id)

    /*
    * next steps would've been having useEffect trying to fetch app state for a user from local store
    * and then setting current submission ID to the next submission ID after the one already voted by user
    * */

    const handleUpVote = (submissionId: string): void => {
        console.log(submissionId)
        /* this was supposed to persist user's actions to the local store for the upVote, and then increase the submission index by 1 to show next one */

    }

    const handleDownVote = (submissionId: string): void => {
        console.log(submissionId)
        /* this was supposed to persist user's actions to the local store for the downVote  and then increase the submission index by 1 to show next one */

    }

    return (
        <BusinessLogicWrapper availableSubmissions={EXAMPLE_SUBMISSIONS} handleDownVote={handleDownVote}
                              handleUpVote={handleUpVote} currentSubmissionId={currentSubmissionId}>
            <BrowserRouter>
                <RoutesImport>
                    <Route path="/" element={<UserView/>}/>
                </RoutesImport>
            </BrowserRouter>
        </BusinessLogicWrapper>
    );
}

export default App;
