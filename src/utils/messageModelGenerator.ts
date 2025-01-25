const generateMessageModel = (iUserId: string, rUserId: string) => {
  return `${iUserId},${rUserId}`;
};

export { generateMessageModel };
