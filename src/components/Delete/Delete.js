
export function Delete(props) {
    const id = props.match.params.id;

    const handleDelete = async event => {
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteUrl(id));

        props.history.push("/");
    };

    return;
}