ALTER TABLE "review_assignments"
ADD CONSTRAINT "review_assignments_expertise_score_check"
CHECK ("expertise_score" >= 1 AND "expertise_score" <= 5);

ALTER TABLE "review_assignments"
ADD CONSTRAINT "review_assignments_score_check"
CHECK ("score" >= -3 AND "score" <= 3);