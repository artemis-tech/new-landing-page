// A mock function to mimic making an async request for data
export function sendMessage(message: string) {
  console.log(`message to be sent: ${message}`);
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(
      () => resolve({ data: 'message sent!' }),
      Math.floor(Math.random() * 2000)
    )
  );
}
