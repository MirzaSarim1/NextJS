import { comments } from "../data";

export async function GET(_request, {params}) {
    const {id} = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if (!comment) {
        return new Response(`Comment with id: ${id} Not Found`,{
            status: 404,
        });
    }
    return Response.json(comment);
}

export async function PATCH(request, {params}) {
    const {id} = await params;
    const updatedComment = await request.json();
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if (!comment) {
        return new Response(`Comment with id: ${id} Not Found`,{
            status: 404,
        });
    }
    comment.text = updatedComment.text;
    return Response.json(comment);
}

export async function DELETE(_request, {params}) {
    const {id} = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index === -1) {
        return new Response(`Comment with id: ${id} Not Found`,{
            status: 404,
        });
    }
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}