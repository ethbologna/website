'use client';

import MeetupTabs from '@/components/pages/meetup/MeetupTabs';

export default function MeetupPage() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Meetups</h1>
        <MeetupTabs />
      </div>
    </div>
  );
}
