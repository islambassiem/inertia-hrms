const NoRecords = ({ message }: { message: string }) => {
    return (
        <>
            <div className="p-4 flex justify-center items-center alert-error">
                {message}
            </div>
        </>
    );
};

export default NoRecords;
