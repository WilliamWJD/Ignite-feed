interface PostProps {
    title: String,
    content: String
}

export function Post({ title, content }: PostProps) {
    return (
        <div>
            <strong>{title}</strong>
            <p>{content}</p>
        </div>
    )
}