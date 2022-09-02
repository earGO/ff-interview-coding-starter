import React from 'react';
import styled from '@emotion/styled';
import {useAppContext} from "../business_logic";

const ComponentLayout = styled.div`

    img{
      width: 240px;
      height: auto;
    }
`;



interface ComponentProps extends React.ComponentProps<any> {
}

export const SubmissionAssets: React.FunctionComponent<ComponentProps> = (props: React.PropsWithChildren<ComponentProps>) => {
    const appContext = useAppContext();
    const availableSubmissions = appContext?.availableSubmissions ??[];

    return availableSubmissions && availableSubmissions.length>0?(
        <ComponentLayout>
            <img src={availableSubmissions[0].assets[0].src}/>

            <img src={availableSubmissions[0].assets[1].src}/>

            <img src={availableSubmissions[0].assets[2].src}/>
        </ComponentLayout>
    ):null
}
