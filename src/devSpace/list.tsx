import React from 'react';
import { FC } from 'react';
import {
    List,
    ListProps,
    Datagrid,
    TextField,
    Button,
    TopToolbar,
    sanitizeListRestProps,
    ReferenceField,
    DeleteButton,
    useListContext,
    useGetOne,
    useTranslate,
} from 'react-admin';
import { Link } from 'react-router-dom';

const Empty = () => {
    return <div>empty</div>;
};

const ListActions = (props: any) => {
    const { ...rest } = props;
    return <TopToolbar {...sanitizeListRestProps(rest)}></TopToolbar>;
};

const StatusField = (record: any) => {
    const translate = useTranslate();
    return (
        <div>
            {record.status === 1
                ? translate('resources.devSpace.status.deployed')
                : translate('resources.devSpace.status.undeployed')}
        </div>
    );
};

const Title = () => {
    const translate = useTranslate();
    const listContext = useListContext();
    const { data, loading } = useGetOne('cluster', listContext.filterValues.cluster);
    if (loading || !data) {
        return <span>{translate('resources.devSpace.name', { smart_count: 2 })}</span>;
    }
    return (
        <span>
            {translate('resources.cluster.name', { smart_count: 1 })} {`"${data.name}"`}{' '}
            {translate('resources.devSpace.name', { smart_count: 2 })}
        </span>
    );
};

const DevSpaceList: FC<ListProps> = (props) => (
    <List
        {...props}
        title={<Title />}
        empty={<Empty />}
        bulkActionButtons={false}
        pagination={false}
        exporter={false}
        actions={<ListActions />}
    >
        <Datagrid>
            <StatusField
                label="resources.devSpace.fields.status"
                source="status"
                sortable={false}
            />
            <ReferenceField
                label="resources.devSpace.fields.user"
                source="user_id"
                reference="users"
            >
                <TextField source="name" />
            </ReferenceField>
            <TextField
                label="resources.devSpace.fields.namespace"
                source="namespace"
                sortable={false}
            />
            <TextField
                label="resources.devSpace.fields.created_at"
                source="created_at"
                sortable={false}
            />
            <ReferenceField
                label="resources.devSpace.fields.application"
                source="application_id"
                reference="application"
            >
                <TextField source="context.application_name" />
            </ReferenceField>
            <TextField label="resources.devSpace.fields.cpu" source="cpu" sortable={false} />
            <TextField label="resources.devSpace.fields.memory" source="memory" sortable={false} />
            <SpaceShowButton />
            <DeleteButton undoable={false} />
        </Datagrid>
    </List>
);

const SpaceShowButton = ({ record }: any) => (
    <Button
        to={`/space/${record.id}/show?cluster_id=${record.cluster_id}`}
        label={'resources.devSpace.actions.show'}
        onClick={(e) => e.stopPropagation()}
        component={Link}
    />
);

export default DevSpaceList;
