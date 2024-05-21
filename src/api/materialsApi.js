const API_BASE_URL = 'http://localhost:8080/adm'; // Замените на фактический базовый URL вашего API

export const getMaterials = async () => {
  const response = await fetch(`${API_BASE_URL}/v1/catalog/papers`, {
    method: 'GET',
    headers: {
      'Accept-Language': 'ru-RU',
      'X-Correlation-Id': '1f0b7925-cee6-4e44-8ea3-4e585d12212d',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching materials: ${response.status}`);
  }

  return response.json();
};

export const getLaminations = async () => {
  const response = await fetch(`${API_BASE_URL}/v1/catalog/laminates`, {
    method: 'GET',
    headers: {
      'Accept-Language': 'ru-RU',
      'X-Correlation-Id': '1f0b7925-cee6-4e44-8ea3-4e585d12212d',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching laminations: ${response.status}`);
  }

  return response.json();
};
