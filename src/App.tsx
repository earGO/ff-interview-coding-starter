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

    const [currentSubmissionId, setCurrentSubmissionId] = useState<null|string>(EXAMPLE_SUBMISSIONS[0].id)

    const handleUpVote = (submissionId: string): void => {
        console.log(submissionId)
    }

    const handleDownVote = (submissionId: string): void => {
        console.log(submissionId)
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
