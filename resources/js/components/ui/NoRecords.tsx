import { IconType } from 'react-icons';

interface NoRecordsProps {
    title: string;
    body: string;
    icon?: IconType;
}
const NoRecords = ({ title, body, icon: Icon }: NoRecordsProps) => {
    return (
        <>
            {/* <div className="p-4 flex justify-center items-center alert-error">
                {message}
            </div> */}
            <div className="text-center py-16 bg-ash-50 dark:bg-ash-800 rounded-lg border-2 border-ash-300 dark:border-ash-600">
                {Icon && (
                    <Icon className="size-16 text-primary-700 mx-auto mb-4 " />
                )}
                <h3 className="text-lg font-medium text-ash-900 dark:text-ash-100 mb-1">
                    {title}
                </h3>
                <p className="text-sm text-ash-600 dark:text-ash-400">{body}</p>
            </div>
        </>
    );
};

export default NoRecords;
