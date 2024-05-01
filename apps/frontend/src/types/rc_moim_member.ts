// create table
//   public.rc_moim_member (
//     id bigint generated by default as identity,
//     member_id bigint null,
//     moim_id bigint null,
//     party_id bigint null,
//     status character varying null,
//     paricipate_status character varying null,
//     created_at timestamp with time zone not null default now(),
//     updated_at timestamp with time zone null,
//     deleted_at timestamp with time zone null,
//     constraint rc_moim_member_pkey primary key (id)
//   ) tablespace pg_default;

export interface RcMoimMember {
  id: number;
  memberId?: number;
  moimId?: number;
  partyId?: number;
  status?: string;
  paricipateStatus?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}