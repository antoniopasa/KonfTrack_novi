-- CreateTable
CREATE TABLE "committee_members" (
    "id" SERIAL NOT NULL,
    "conference_id" INTEGER,
    "user_id" INTEGER,
    "invitation_status" VARCHAR(20) DEFAULT 'pending',

    CONSTRAINT "committee_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conferences" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(250),
    "location" VARCHAR(250),
    "start_date" DATE,
    "end_date" DATE,
    "topics" TEXT,
    "submission_deadline" TIMESTAMPTZ(6),
    "review_deadline" TIMESTAMPTZ(6),
    "notification_deadline" TIMESTAMPTZ(6),
    "final_deadline" TIMESTAMPTZ(6),
    "max_pages" INTEGER,
    "chair_id" INTEGER,
    "status" VARCHAR(20) DEFAULT 'pending',
    "program_published" BOOLEAN DEFAULT false,

    CONSTRAINT "conferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_templates" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "subject" VARCHAR(250) NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "email_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paper_authors" (
    "id" SERIAL NOT NULL,
    "paper_id" INTEGER,
    "user_id" INTEGER,
    "invited_name" VARCHAR(250),
    "invited_email" VARCHAR(250),
    "is_contact_author" BOOLEAN DEFAULT false,

    CONSTRAINT "paper_authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paper_versions" (
    "id" SERIAL NOT NULL,
    "paper_id" INTEGER,
    "version_number" INTEGER,
    "version_type" VARCHAR(20),
    "file_path" TEXT,
    "response_file_path" TEXT,
    "statement_file_path" TEXT,
    "submitted_at" TIMESTAMPTZ(6),

    CONSTRAINT "paper_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "papers" (
    "id" SERIAL NOT NULL,
    "conference_id" INTEGER,
    "created_by" INTEGER,
    "title" VARCHAR(250),
    "abstract" TEXT,
    "keywords" TEXT,
    "topic" VARCHAR(250),
    "status" VARCHAR(30) DEFAULT 'draft',
    "submitted_at" TIMESTAMPTZ(6),
    "section_id" INTEGER,
    "presentation_author_id" INTEGER,
    "presentation_start" TIMESTAMPTZ(6),
    "presentation_end" TIMESTAMPTZ(6),

    CONSTRAINT "papers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_schedule" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "paper_id" INTEGER NOT NULL,

    CONSTRAINT "personal_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review_assignments" (
    "id" SERIAL NOT NULL,
    "paper_id" INTEGER,
    "reviewer_id" INTEGER,
    "paper_version_id" INTEGER,
    "assigned_at" TIMESTAMPTZ(6),
    "score" INTEGER,
    "expertise_score" INTEGER,
    "author_comment" TEXT,
    "committee_comment" TEXT,
    "reviewed_at" TIMESTAMPTZ(6),

    CONSTRAINT "review_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review_discussions" (
    "id" SERIAL NOT NULL,
    "review_assignment_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "review_discussions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviewer_preferences" (
    "id" SERIAL NOT NULL,
    "paper_id" INTEGER,
    "reviewer_id" INTEGER,
    "preference" VARCHAR(30),

    CONSTRAINT "reviewer_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" SERIAL NOT NULL,
    "conference_id" INTEGER,
    "topic" VARCHAR(250),
    "room" VARCHAR(250),
    "start_time" TIMESTAMPTZ(6),
    "end_time" TIMESTAMPTZ(6),
    "chair_id" INTEGER,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(250),
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "institution" VARCHAR(250),
    "orcid" VARCHAR(19),
    "expertise" TEXT,
    "is_admin" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "password_hash" VARCHAR(250),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_templates_name_key" ON "email_templates"("name");

-- CreateIndex
CREATE UNIQUE INDEX "personal_schedule_user_id_paper_id_key" ON "personal_schedule"("user_id", "paper_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_orcid_key" ON "users"("orcid");

-- AddForeignKey
ALTER TABLE "committee_members" ADD CONSTRAINT "fk_cm_conferences" FOREIGN KEY ("conference_id") REFERENCES "conferences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "committee_members" ADD CONSTRAINT "fk_cm_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conferences" ADD CONSTRAINT "fk_conferences_chair" FOREIGN KEY ("chair_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "paper_authors" ADD CONSTRAINT "fk_pa_papers" FOREIGN KEY ("paper_id") REFERENCES "papers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "paper_authors" ADD CONSTRAINT "fk_pa_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "paper_versions" ADD CONSTRAINT "fk_pv_papers" FOREIGN KEY ("paper_id") REFERENCES "papers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "papers" ADD CONSTRAINT "fk_papers_conferences" FOREIGN KEY ("conference_id") REFERENCES "conferences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "papers" ADD CONSTRAINT "fk_papers_creator" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "papers" ADD CONSTRAINT "fk_papers_presenter" FOREIGN KEY ("presentation_author_id") REFERENCES "paper_authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "papers" ADD CONSTRAINT "fk_papers_sections" FOREIGN KEY ("section_id") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "personal_schedule" ADD CONSTRAINT "fk_ps_papers" FOREIGN KEY ("paper_id") REFERENCES "papers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "personal_schedule" ADD CONSTRAINT "fk_ps_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review_assignments" ADD CONSTRAINT "fk_ra_users" FOREIGN KEY ("reviewer_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review_assignments" ADD CONSTRAINT "fk_ra_versions" FOREIGN KEY ("paper_version_id") REFERENCES "paper_versions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review_discussions" ADD CONSTRAINT "fk_rd_assignments" FOREIGN KEY ("review_assignment_id") REFERENCES "review_assignments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviewer_preferences" ADD CONSTRAINT "fk_rp_papers" FOREIGN KEY ("paper_id") REFERENCES "papers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviewer_preferences" ADD CONSTRAINT "fk_rp_users" FOREIGN KEY ("reviewer_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "fk_sections_chair" FOREIGN KEY ("chair_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "fk_sections_conferences" FOREIGN KEY ("conference_id") REFERENCES "conferences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
