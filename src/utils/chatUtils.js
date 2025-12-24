// Утилиты для работы с чатами

// Создание нового чата для вакансии
export const createVacancyChat = (vacancyTitle, vacancyId) => {
  const chatId = `vacancy_${vacancyId}_${Date.now()}`;
  const chatName = `Соискатель на "${vacancyTitle}"`;
  
  // Получаем существующие данные
  const savedMessages = localStorage.getItem('accountChatMessages');
  const savedChatList = localStorage.getItem('accountChatList');
  
  const messages = savedMessages ? JSON.parse(savedMessages) : {};
  const chatList = savedChatList ? JSON.parse(savedChatList) : [];
  
  // Проверяем, не существует ли уже чат для этой вакансии
  const existingChat = chatList.find(chat => chat.vacancyId === vacancyId);
  if (existingChat) {
    return existingChat.id; // Возвращаем ID существующего чата
  }
  
  // Создаем новый чат
  messages[chatId] = [];
  chatList.push({
    id: chatId,
    name: chatName,
    vacancyId: vacancyId
  });
  
  // Сохраняем в localStorage
  localStorage.setItem('accountChatMessages', JSON.stringify(messages));
  localStorage.setItem('accountChatList', JSON.stringify(chatList));
  
  return chatId;
};

