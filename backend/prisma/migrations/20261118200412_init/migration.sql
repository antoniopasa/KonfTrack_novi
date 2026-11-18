-- AddForeignKey
ALTER TABLE "review_assignments" ADD CONSTRAINT "fk_ra_papers" FOREIGN KEY ("paper_id") REFERENCES "papers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
