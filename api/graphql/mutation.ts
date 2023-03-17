import { graphql } from "../gql";

export const createFormMutation = graphql(`
  mutation Mutation($createFormInput: FormDataInput) {
    createForm(createFormInput: $createFormInput) {
      code
      form {
        id
        teamName
      }
      message
    }
  }
`)