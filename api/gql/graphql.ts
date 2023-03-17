/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FormData = {
  __typename?: 'FormData';
  college: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  phone: Scalars['String'];
  teamLeader: Scalars['String'];
  teamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  teamName: Scalars['String'];
  whatsapp: Scalars['String'];
};

export type FormDataInput = {
  college: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  teamLeader: Scalars['String'];
  teamMembers?: InputMaybe<Array<InputMaybe<TeamMemberInput>>>;
  teamName: Scalars['String'];
  whatsapp: Scalars['String'];
};

export type FormMutationResponse = IResponse & {
  __typename?: 'FormMutationResponse';
  code: Scalars['Int'];
  form?: Maybe<FormData>;
  message: Scalars['String'];
};

export type FormQueryResponse = IResponse & {
  __typename?: 'FormQueryResponse';
  code: Scalars['Int'];
  form?: Maybe<Array<FormData>>;
  message: Scalars['String'];
};

export type IResponse = {
  code: Scalars['Int'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm?: Maybe<FormMutationResponse>;
  deleteForm?: Maybe<FormMutationResponse>;
  updateForm?: Maybe<FormMutationResponse>;
};


export type MutationCreateFormArgs = {
  createFormInput?: InputMaybe<FormDataInput>;
};


export type MutationDeleteFormArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFormArgs = {
  id: Scalars['ID'];
  updateFormInput?: InputMaybe<FormDataInput>;
};

export type PaginateInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  form?: Maybe<FormQueryResponse>;
  forms?: Maybe<FormQueryResponse>;
};


export type QueryFormArgs = {
  id: Scalars['ID'];
};

export type SearchInput = {
  email?: InputMaybe<Scalars['String']>;
  teamLeader?: InputMaybe<Scalars['String']>;
  teamName?: InputMaybe<Scalars['String']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  college?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
};

export type TeamMemberInput = {
  college: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  whatsapp: Scalars['String'];
};

export type MutationMutationVariables = Exact<{
  createFormInput?: InputMaybe<FormDataInput>;
}>;


export type MutationMutation = { __typename?: 'Mutation', createForm?: { __typename?: 'FormMutationResponse', code: number, message: string, form?: { __typename?: 'FormData', id: string, teamName: string } | null } | null };


export const MutationDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "Mutation" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "createFormInput" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "FormDataInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createForm" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "createFormInput" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "createFormInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "form" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "teamName" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "message" } }] } }] } }] } as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;