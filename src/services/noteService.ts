import axios from "axios";
import type { Note, NoteTag } from "../types/note";
export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
export interface FetchNotesParams {
  page: number;
  perPage?: number;
  search?: string;
  signal?: AbortSignal;
}
export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}
const api = axios.create({ baseURL: "https://notehub-public.goit.study/api" });
api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  if (!token) throw new Error("NoteHub token is missing");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export async function fetchNotes({
  page,
  perPage = 12,
  search = "",
  signal,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const { data } = await api.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, ...(search ? { search } : {}) },
    signal,
  });
  return data;
}
export async function createNote(values: CreateNoteParams): Promise<Note> {
  const { data } = await api.post<Note>("/notes", values);
  return data;
}
export async function deleteNote(id: string): Promise<Note> {
  const { data } = await api.delete<Note>(`/notes/${encodeURIComponent(id)}`);
  return data;
}
