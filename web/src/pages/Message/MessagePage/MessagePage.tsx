import MessageCell from 'src/components/Message/MessageCell'

type MessagePageProps = {
  id: string
}

const MessagePage = ({ id }: MessagePageProps) => {
  return <MessageCell id={id} />
}

export default MessagePage
