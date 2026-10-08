import raw from "./certificates.json";
export type Certificate = { title: string; issuer: string; date: string; length: string; file: string };
export const certificates: Certificate[] = raw;
export const internshipCertificate = "/certs/aaib-internship.jpg";
