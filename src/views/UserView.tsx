import React from 'react';
import styled from '@emotion/styled';
import {AppContainer} from "./AppContainer";
import {SubmissionHeader} from "./SubmissionHeader";
import {SubmissionAssets} from "./SubmissionAssets";
import {SubmissionControls} from "./SubmissionControls";

const ComponentLayout = styled.div``;

interface ComponentProps extends React.ComponentProps<any> {
}

export const UserView: React.FunctionComponent<ComponentProps> = (props: React.PropsWithChildren<ComponentProps>) => {
    return (
        <AppContainer>
            <SubmissionHeader/>
            <SubmissionAssets/>
            <SubmissionControls/>
        </AppContainer>
    )
}
