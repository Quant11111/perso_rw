import type { EditMessageById, UpdateMessageInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormMessage = NonNullable<EditMessageById['message']>

interface MessageFormProps {
  message?: EditMessageById['message']
  onSave: (data: UpdateMessageInput, id?: FormMessage['id']) => void
  error: RWGqlError
  loading: boolean
}

const MessageForm = (props: MessageFormProps) => {
  const onSubmit = (data: FormMessage) => {
    props.onSave(data, props?.message?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMessage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="content"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>

        <TextField
          name="content"
          defaultValue={props.message?.content}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="content" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.message?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="message-type-0"
            name="type"
            defaultValue="SENT"
            defaultChecked={props.message?.type?.includes('SENT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Sent</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="message-type-1"
            name="type"
            defaultValue="RECEIVED"
            defaultChecked={props.message?.type?.includes('RECEIVED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Received</div>
        </div>

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="deletedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted at
        </Label>

        <DatetimeLocalField
          name="deletedAt"
          defaultValue={formatDatetime(props.message?.deletedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deletedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MessageForm
