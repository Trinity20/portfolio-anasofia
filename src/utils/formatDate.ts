export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  // Garantir que a data tem hora
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  // Data completa legível em português
  const fullDate = targetDate.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  // Calcular diferença em dias
  const diffTime = currentDate.getTime() - targetDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let relative = "";
  if (diffDays === 0) {
    relative = "Hoje";
  } else if (diffDays === 1) {
    relative = "Ontem";
  } else if (diffDays < 30) {
    relative = `há ${diffDays} dias`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    relative = months === 1 ? "há 1 mês" : `há ${months} meses`;
  } else {
    const years = Math.floor(diffDays / 365);
    relative = years === 1 ? "há 1 ano" : `há ${years} anos`;
  }

  return `${fullDate} (${relative})`;
}
