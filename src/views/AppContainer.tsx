import React from 'react';
import styled from '@emotion/styled';

const ComponentLayout = styled.div``;

interface ComponentProps extends React.ComponentProps<any> {
}

export const AppContainer: React.FunctionComponent<ComponentProps> = (props: React.PropsWithChildren<ComponentProps>) => {
    return (
        <ComponentLayout>
            {props.children}
        </ComponentLayout>
    )
}
