import { TranslationMessages } from 'react-admin';
import englishMessages from 'ra-language-english';

const { ra } = englishMessages;
const { auth } = ra;
const newAuth = { email: 'Email', ...auth };
ra.auth = newAuth;
englishMessages.ra = ra;

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    nh: {
        language: 'Language',
        theme: {
            name: 'Theme',
        },
        layout: { menu: { home: 'Nocalhost', document: 'Documents' } },
        dashboard: {
            welcome: { title: 'Welcome to the Nocalhost', content: 'Nocalhost is Not localhost' },
        },
        validation: {
            required: {
                email: 'The Email is required',
                name: 'The Name is required',
                password: 'The Password is Required',
                confirm_password: 'The Confirm Password is Required',
            },
            confirm_password_error: 'The Confirm Password mast be equals The Password',
        },
        action: { copy: 'Copy', copied: 'Copied!' },
    },
    resources: {
        users: {
            name: 'User |||| Users',
            fields: {
                name: 'Name',
                email: 'Email',
                cluster_count: 'Clusters Count',
                status: 'Status',
                password: 'Password',
                confirm_password: 'Confirm Password',
            },
            status: { active: 'Active', inactive: 'Inactive' },
        },
        cluster: {
            name: 'Cluster |||| Clusters',
            fields: {
                name: 'Name',
                cluster_version: 'Cluster Version',
                nodes_count: 'Nodes Count',
                users_count: 'Users Count',
                user: 'Creator',
                created_at: 'Created At',
                kubeconfig: 'KubeConfig',
            },
            tips: { kubeconfig: 'How to get kubeconfig?' },
            delete: {
                confirm: {
                    title: 'Delete cluster "%{name}"',
                    content:
                        'This will delete all nocalhost resources and created workspaces from the cluster.',
                },
            },
        },
        application: {
            name: 'Application |||| Applications',
            fields: {
                application_name: 'Application Name',
                source: 'Source',
                install_type: 'Install Type',
                application_url: 'Application Url',
                resource_dir: 'Resource Dir',
                cluster_count: 'Clusters Count',
                status: 'Status',
                user: 'Creator',
                created_at: 'Created At',
            },
        },
        space: {
            name: 'Space |||| Spaces',
            fields: {
                status: 'Status',
                user: 'Owner',
                namespace: 'Namespace',
                created_at: 'Created At',
                cluster: 'Cluster',
                application: 'Application',
                resource: 'Resource',
                cpu: 'CPU',
                memory: 'Memory',
                kubeconfig: 'KubeConfig',
                resource_limit: 'Resource Limit',
            },
            actions: {
                create: 'Create Space',
                show: 'Show Space',
                list: 'Space List',
                download: 'Download KubeConfig',
            },
            status: { deployed: 'Deployed', undeployed: 'Not deployed' },
            empty: { title: 'Space is empty', content: 'Create a new Space' },
            document: {
                vscode: 'Start coding with Nocalhost VSCode Plugin(Recemmended):',
                vscode_step1:
                    'Step 1: Install Nocalhost VSCode Plugin: Search nocalhost in the extension marketplace or click here:',
                vscode_step1_1:
                    'https://marketplace.visualstudio.com/items?itemName=nocalhost.nocalhost',
                vscode_step2: 'Step 2: Configure plugin and sigin nocalhost api server:',
                vscode_step2_1:
                    'Click Nocalhost Plugin Tab and click the          icon set api host: http://127.0.0.1:32687',
                vscode_step2_2: 'Click sign in to sigin nocalhost api server.',
                vscode_step3: 'Step 3: Install application and start development:',
                vscode_step3_1:
                    'Click the install         icon of the application that you want to develop on the left panel.',
                vscode_step3_2:
                    'Click the Workload of this application to watch the deployment progress and wait for the installation.',
                vscode_step3_3:
                    'Click the start develop         icon to enter DevSpace and enjoy your coding.',
                nhctl: 'Start coding with nhctl:',
                nhctl_step1: 'Step 1: Install nhctl: https://nocalhost.dev/docs/installation.md',
                nhctl_step2: 'Step 2: Click "Download Kubeconfig" and save this file',
                nhctl_step3: 'Step 3: Install an application that you  want to develop via nhctl:',
                nhctl_step3_1: '# Click here to get more details about the arguments of nhctl',
                nhctl_step3_2:
                    'nhctl install <application name> --kubeconfig <the file you downloaded> -u <a git repo url which contains helm chart or manifests>  ',
                nhctl_step4:
                    'Step 4: Enter DevMode by specify a workload that you want to develop:',
                nhctl_step4_1: '# Click here to get more details about the arguments of nhctl ',
                nhctl_step4_2:
                    'nhctl dev start <application name> --kubeconfig <the file you downloaded> -d <the workload that you want to develop>  ',
                nhctl_step5: 'Step 5: Sync codes to DevMode containers:',
                nhctl_step5_1: '# Click here to get more details about the arguments of nhctl ',
                nhctl_step5_2:
                    'nhctl sync <application name> --kubeconfig <the file you downloaded> -d <the workload that you want to develop>  ',
                nhctl_step6: 'Step 6: Forward ports from DevMode container to local(Optional):',
                nhctl_step6_1: '# Click here to get more details about the arguments of nhctl ',
                nhctl_step6_2:
                    'nhctl port-forward <application name> --kubeconfig <the file you downloaded> -d <the workload that you want to develop>  ',
                nhctl_step7: 'Step 7: Coding locally and start your program remotely:',
                nhctl_step7_1: '# Click here to get more details about the arguments of nhctl ',
                nhctl_step7_2:
                    'kubectl --kubeconfig <the file you downloaded> exec -it pod/<pod_name> -c nocalhost-dev -- bash',
                nhctl_step7_3: 'bash: <your program start command,like: ./gradlew bootRun>',
            },
        },
        devSpace: {
            name: 'Space |||| Spaces',
            fields: {
                status: 'Status',
                user: 'Owner',
                namespace: 'Namespace',
                created_at: 'Created At',
                cluster: 'Cluster',
                application: 'Application',
                resource: 'Resource',
                cpu: 'CPU',
                memory: 'Memory',
                kubeconfig: 'KubeConfig',
                resource_limit: 'Resource Limit',
            },
            actions: { create: 'Create Space', show: 'Show Space', list: 'Space List' },
            status: { deployed: 'Deployed', undeployed: 'Not deployed' },
        },
    },
};

export default customEnglishMessages;
