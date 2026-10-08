import { describe, expect, it } from "vitest";

import { inquirySchema, inquiryTopics, MAX_MESSAGE } from "@/components/caffein/inquiry";

// The inquiry form never talks to a server, so these limits are the only thing
// standing between a visitor and an unusable note. Pin the exact values.
const valid = {
  name: "Jamie Rivera",
  email: "jamie@example.com",
  topic: inquiryTopics[0],
  message: "Could you hold a table for six on Saturday morning?",
  updates: false,
};

describe("Contact inquiry validation", () => {
  it("accepts a complete, sensible inquiry", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("requires a name of at least two characters", () => {
    expect(inquirySchema.safeParse({ ...valid, name: "  J  " }).success).toBe(false);
  });

  it("rejects a name longer than 100 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, name: "a".repeat(101) }).success).toBe(false);
  });

  it("rejects an email without an @", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "jamie.example.com" }).success).toBe(false);
  });

  it("rejects an email longer than 255 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, email: `${"a".repeat(250)}@b.co` }).success).toBe(false);
  });

  it("requires a topic from the list", () => {
    expect(inquirySchema.safeParse({ ...valid, topic: "" }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...valid, topic: "Free money" }).success).toBe(false);
  });

  it("requires a note of at least ten characters", () => {
    expect(inquirySchema.safeParse({ ...valid, message: "hi" }).success).toBe(false);
  });

  it("caps the note at 1000 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, message: "x".repeat(MAX_MESSAGE) }).success).toBe(true);
    expect(inquirySchema.safeParse({ ...valid, message: "x".repeat(MAX_MESSAGE + 1) }).success).toBe(false);
  });

  it("treats the updates tickbox as optional", () => {
    expect(inquirySchema.safeParse({ ...valid, updates: undefined }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...valid, updates: true }).success).toBe(true);
  });
});
