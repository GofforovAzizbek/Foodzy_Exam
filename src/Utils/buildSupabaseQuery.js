
const BASE_URL = import.meta.env.VITE_SUPABASE_URL;

export function buildSupabaseUrl(table, options = {}) {
  const {
    filters = {},
    select = "*",
    order,
    limit,
    offset,
    textSearch,
    rangeGte,
    rangeLte,
  } = options;

  const params = [];

  params.push(`select=${select}`);

  Object.entries(filters).forEach(([column, value]) => {
    if (value === null || value === undefined) return;

    if (typeof value === "boolean") {
      params.push(`${column}=eq.${value}`);
    } else if (typeof value === "number") {
      params.push(`${column}=eq.${value}`);
    } else {
      params.push(`${column}=eq.${encodeURIComponent(value)}`);
    }
  });

  if (rangeGte) {
    params.push(`${rangeGte.column}=gte.${rangeGte.value}`);
  }

  if (rangeLte) {
    params.push(`${rangeLte.column}=lte.${rangeLte.value}`);
  }

  if (textSearch) {
    params.push(
      `${textSearch.column}=ilike.*${encodeURIComponent(textSearch.query)}*`,
    );
  }

  if (order) params.push(`order=${order}`);
  if (limit !== undefined) params.push(`limit=${limit}`);
  if (offset !== undefined) params.push(`offset=${offset}`);

  return `${BASE_URL}/rest/v1/${table}?${params.join("&")}`;
}
