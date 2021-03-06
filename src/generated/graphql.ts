import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticationInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProfilePicture: Scalars['Boolean'];
  changePassword?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  createProperty: PropertyResponse;
  forgotPassword: Scalars['Boolean'];
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  register: UserResponse;
  removeProperty: Scalars['Boolean'];
  updateProperty: PropertyResponse;
};


export type MutationAddProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationCreatePropertyArgs = {
  data: PropertyInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data: AuthenticationInput;
};


export type MutationRegisterArgs = {
  data: AuthenticationInput;
};


export type MutationRemovePropertyArgs = {
  id: Scalars['String'];
};


export type MutationUpdatePropertyArgs = {
  data: PropertyInput;
  id: Scalars['String'];
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type Property = {
  __typename?: 'Property';
  /** number of bathrooms for the property */
  bathrooms: Scalars['Float'];
  /** number of bedrooms for the property */
  bedrooms: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['String'];
  /** number of guests this property can accepty */
  guests: Scalars['Float'];
  id: Scalars['String'];
  /** Price per night for the property */
  price: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PropertyInput = {
  /** number of bathrooms for the property */
  bathrooms: Scalars['Float'];
  /** number of bedrooms for the property */
  bedrooms: Scalars['Float'];
  /** number of guests this property can accepty */
  guests: Scalars['Float'];
  /** Price per night for the property */
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type PropertyResponse = {
  __typename?: 'PropertyResponse';
  errors?: Maybe<Array<FieldError>>;
  property?: Maybe<Property>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  properties: Array<Property>;
  property?: Maybe<Property>;
};


export type QueryPropertyArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** True if user has activated/confirmed their account */
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularPropertyFragment = { __typename?: 'Property', id: string, creatorId: string, title: string, price: number, guests: number, bedrooms: number, bathrooms: number };

export type RegularUserFragment = { __typename?: 'User', id: string, email: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'User', id: string, email: string } | null };

export type CreatePropertyMutationVariables = Exact<{
  data: PropertyInput;
}>;


export type CreatePropertyMutation = { __typename?: 'Mutation', createProperty: { __typename?: 'PropertyResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, property?: { __typename?: 'Property', id: string, creatorId: string, title: string, price: number, guests: number, bedrooms: number, bathrooms: number } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  data: AuthenticationInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: AuthenticationInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string } | null };

export type PropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PropertiesQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Property', id: string, creatorId: string, title: string, price: number, guests: number, bedrooms: number, bathrooms: number }> };

export type PropertyQueryVariables = Exact<{
  propertyId: Scalars['String'];
}>;


export type PropertyQuery = { __typename?: 'Query', property?: { __typename?: 'Property', id: string, creatorId: string, title: string, price: number, guests: number, bedrooms: number, bathrooms: number } | null };

export const RegularPropertyFragmentDoc = gql`
    fragment RegularProperty on Property {
  id
  creatorId
  title
  price
  guests
  bedrooms
  bathrooms
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  user {
    ...RegularUser
  }
  errors {
    ...RegularError
  }
}
    ${RegularUserFragmentDoc}
${RegularErrorFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePropertyDocument = gql`
    mutation CreateProperty($data: PropertyInput!) {
  createProperty(data: $data) {
    errors {
      ...RegularError
    }
    property {
      ...RegularProperty
    }
  }
}
    ${RegularErrorFragmentDoc}
${RegularPropertyFragmentDoc}`;

export function useCreatePropertyMutation() {
  return Urql.useMutation<CreatePropertyMutation, CreatePropertyMutationVariables>(CreatePropertyDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($data: AuthenticationInput!) {
  login(data: $data) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($data: AuthenticationInput!) {
  register(data: $data) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PropertiesDocument = gql`
    query Properties {
  properties {
    ...RegularProperty
  }
}
    ${RegularPropertyFragmentDoc}`;

export function usePropertiesQuery(options?: Omit<Urql.UseQueryArgs<PropertiesQueryVariables>, 'query'>) {
  return Urql.useQuery<PropertiesQuery>({ query: PropertiesDocument, ...options });
};
export const PropertyDocument = gql`
    query Property($propertyId: String!) {
  property(id: $propertyId) {
    ...RegularProperty
  }
}
    ${RegularPropertyFragmentDoc}`;

export function usePropertyQuery(options: Omit<Urql.UseQueryArgs<PropertyQueryVariables>, 'query'>) {
  return Urql.useQuery<PropertyQuery>({ query: PropertyDocument, ...options });
};