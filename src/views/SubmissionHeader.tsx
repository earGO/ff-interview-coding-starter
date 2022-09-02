import React from 'react';
import styled from '@emotion/styled';
import {useAppContext} from "../business_logic";

const ComponentLayout = styled.div``;

interface ComponentProps extends React.ComponentProps<any> {
}

export const SubmissionHeader: React.FunctionComponent<ComponentProps> = (props: React.PropsWithChildren<ComponentProps>) => {
    const ViewContext = useAppContext();
    const availableSubmissions = ViewContext?.availableSubmissions ??[];

    return availableSubmissions && availableSubmissions.length>0?(
        <ComponentLayout>
            {availableSubmissions[0].name}
        </ComponentLayout>
    ):null
}
