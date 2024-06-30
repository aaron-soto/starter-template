import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const votesFilePath = path.resolve(process.cwd(), 'data', 'votes.json');

// Ensure the votes file exists
if (!fs.existsSync(votesFilePath)) {
  fs.writeFileSync(votesFilePath, JSON.stringify({}));
}

const updateVotes = (questionId: number, type: string) => {
  const data = JSON.parse(fs.readFileSync(votesFilePath, 'utf-8'));
  if (!data[questionId]) {
    data[questionId] = { upvotes: 0, downvotes: 0 };
  }
  if (type === 'upvote') {
    data[questionId].upvotes += 1;
  } else {
    data[questionId].downvotes += 1;
  }
  fs.writeFileSync(votesFilePath, JSON.stringify(data));
};

export async function POST(req: NextRequest) {
  try {
    const { question, type } = await req.json();
    updateVotes(question, type);
    return NextResponse.json({ message: 'Vote recorded' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
