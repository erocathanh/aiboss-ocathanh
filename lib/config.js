// Config-driven settings — workshop date dynamic per CORE_03 v1.3 §1.3.3
// Workshop chạy 2 buổi/tháng recurring. Khi sang edition mới, sửa CHỈ file này.
// Components import config.* — KHÔNG hardcode dates.

export const config = {
  nextWorkshop: {
    // Current edition — UPDATE khi sang edition mới
    dateRange: '16-18/6/2026',
    dateShort: '16-18/6',
    timeRange: '20h-23h giờ Việt Nam',
    timeShort: '20h-23h VN',
    sessions: [
      { day: 'BUỔI 1', date: 'Thứ Ba 16/6 · 20h-23h' },
      { day: 'BUỔI 2', date: 'Thứ Tư 17/6 · 20h-23h' },
      { day: 'BUỔI 3', date: 'Thứ Năm 18/6 · 20h-23h' },
    ],
  },
  brand: {
    domain: 'aiboss.ocathanh.com',
    company: 'Maracafi Limited',
    email: 'admin@erocathanh.com',
  },
  links: {
    aiboss: 'https://aiboss.vn',
    workflow: 'https://workflow.aiboss.vn',
    erocaPersonal: 'https://www.erocathanh.com',
    blog: 'https://blog.erocathanh.com',
  },
};
