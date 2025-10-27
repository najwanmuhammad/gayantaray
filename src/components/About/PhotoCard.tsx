"use client";
import Image from "next/image";

interface PhotoCardProps {
  member: { id: number; name: string; role: string; image: string };
}

export default function PhotoCard({ member }: PhotoCardProps) {
  return (
    <div className="relative w-[270px] overflow-hidden md:w-[442px]">
      <div className="group drop-shadow-xl transition duration-300 hover:drop-shadow-2xl">
        <div className="clip-photo-card transition-transform duration-300 will-change-transform">
          <div className="relative aspect-[3/4] w-full rounded-md">
            <Image
              src={member.image || "/placeholder.svg?height=480&width=360"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(min-width:768px) 340px, 260px"
              priority
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="h4 text-lime-100">{member.name}</h3>
        <div className="clip-role mt-3 inline-flex bg-lime-500 px-3 py-2 font-redhat text-[14px] leading-[150%] font-medium text-blue-500 md:text-[20px]">
          {member.role}
        </div>
      </div>
    </div>
  );
}
