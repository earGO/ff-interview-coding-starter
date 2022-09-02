import React, { useContext } from 'react';
import styled from '@emotion/styled';
import {Submission} from "../ExampleSubmissions";

export interface AppContextContract{
availableSubmissions:Submission[]|null;
    handleUpVote: (submissionId:string)=>void;
    handleDownVote: (submissionId:string)=>void;
    currentSubmissionId:string|null;
}

const AppContext = React.createContext<AppContextContract|null>(null)

export const useAppContext =()=> {
    return useContext<AppContextContract | null>(AppContext);
}

const ComponentLayout = styled.div``;

interface AppContextProviderProps extends React.ComponentProps<any>,AppContextContract {
}


export const BusinessLogicWrapper: React.FunctionComponent<AppContextProviderProps> = (props: React.PropsWithChildren<AppContextProviderProps>) => {
    const {children, ...rest} = props;
    return (
        <AppContext.Provider value={{...rest}}>
            {children}
        </AppContext.Provider>
    )
}
