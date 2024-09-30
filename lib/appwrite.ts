import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.wurth.wurth",
  projectId: "66f95d870016ba9302b7",
  databaseId: "66f95f5900089b35350d",
  userCollectionId: "66f95f82000a5c17ce08",
  productCollectionId: "66f95fc400328f8622ca",
  storageId: "66f963c000018a99e3cb",
};

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  productCollectionId,
  storageId,
} = config;

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account: any = new Account(client);

const avatars = new Avatars(client);

const databases = new Databases(client);

export const createUser = async (email: any, password: any, username: any) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email: any, password: any) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error: any) {
    console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      productCollectionId
    );
    if (!posts) throw Error;
    return posts.documents;
  } catch (error: any) {
    console.log(error);
  }
};

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      productCollectionId,
      [Query.orderDesc("$createdAt")]
    );
    if (!posts) throw Error;
    return posts.documents;
  } catch (error: any) {
    console.log(error);
  }
};
