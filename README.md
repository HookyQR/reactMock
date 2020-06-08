## React demo
This project is a simplified mock of a charity investment presentation application.

All values are mocked where they would normally be fetched via some API (such as AWS Amplify).

Where the mock values are retrieved, the original system that this represents would also subscribe to any create/update/delete notifications. The unsubscribe methods would be returned to each of the useEffect methods to allow correct tear down.

There is no user input in this app, it demonstrates the use of react hooks for data access. There is only on callback used for demo purposes, clicking on a charity summary block will trigger a navigate.

The other pages are truly un-interesting.

_The original implementation discussed was too closely coupled to the dataset to provide any useful reference_
