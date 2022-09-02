import React from 'react';
import styled from '@emotion/styled';
import {useAppContext} from "../business_logic";
import app from "../App";

const ComponentLayout = styled.div`
  width: 100%;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center`;

interface ComponentProps extends React.ComponentProps<any> {
}

export const SubmissionControls: React.FunctionComponent<ComponentProps> = (props: React.PropsWithChildren<ComponentProps>) => {
    const appContext = useAppContext();
    const currentSubmissionId = appContext?.currentSubmissionId??null

    const handleDownVote = ()=>{
        if(!!currentSubmissionId){
            appContext?.handleDownVote && appContext?.handleDownVote(currentSubmissionId)
        }

    }

    const handleUpVote = (): void => {
        if(!!currentSubmissionId){
            appContext?.handleUpVote && appContext?.handleUpVote(currentSubmissionId)
        }

    }

    return (
        <ComponentLayout>
            <button onClick={handleDownVote}>downvote</button>
            <button onClick={handleUpVote}>upvote</button>

        </ComponentLayout>
    )
}
