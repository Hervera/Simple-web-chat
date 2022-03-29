# Simple Web Chat 

## How it works

1. Before entering the chat, You are prompted to enter your name, which is further used to identify your messages.
2. Messages are saved in memory (on the local machine, in localstorage).
3. Each new browser tab is a new chat user. Each new browser tab is a new chat user. The new messages in the chat room are updated to all opened tabs (live updating for all users). Doesn't use socket.io all.
4. You can send messages to chat.
5. You can see message history, and load more messages when scroll chats to the top. (page size = 25)
6. Tests are added on features where they are needed

## Getting Started

### Prerequisites

The following should be installed in your machine:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download)

### Installing

Start by cloning the repository to your local machine

```bash
git clone https://github.com/Hervera/simple-web-chat.git

cd simple-web-chat
```

Next, install the package dependencies by running

```bash
npm install
```

After that, start the application by running

```bash
  npm run start 
```

### Running the tests

```bash
npm run test

```