/* eslint-disable import/prefer-default-export */
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export function formatDateFromIso(date: string): string {
  const dt = parseISO(date);
  return format(dt, 'MMM do yyyy - HH:mm');
}
