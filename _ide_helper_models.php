<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property string|null $position
 * @property int $institution_id
 * @property int $city_id
 * @property int|null $faculty_id
 * @property int|null $section_id
 * @property int $major_id
 * @property int $minor_id
 * @property string|null $employment_number
 * @property \App\Enums\AcademicRank|null $academic_rank
 * @property \App\Enums\ProfessionalRank|null $professional_rank
 * @property \Carbon\CarbonImmutable|null $hiring_date
 * @property \Carbon\CarbonImmutable|null $joining_date
 * @property \Carbon\CarbonImmutable|null $resignation_date
 * @property \App\Enums\AppointmentType|null $appointment_type
 * @property \App\Enums\EmploymentStatus|null $employment_status
 * @property string|null $tasks
 * @property \App\Enums\JobNature|null $job_nature
 * @property \App\Enums\AccomodationStatus|null $accommodation_status
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\AcademicExperienceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereAcademicRank($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereAccommodationStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereAppointmentType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereCityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereEmploymentNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereEmploymentStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereHiringDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereInstitutionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereJobNature($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereJoiningDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereMajorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereMinorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereProfessionalRank($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereResignationDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereSectionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereTasks($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicExperience whereUpdatedBy($value)
 */
	final class AcademicExperience extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property \App\Enums\AcademicRank $academic_rank
 * @property \Carbon\CarbonImmutable $effective_date
 * @property \Carbon\CarbonImmutable|null $end_date
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\Employee $employee
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\AcademicRankFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereAcademicRank($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereEffectiveDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AcademicRank whereUpdatedBy($value)
 */
	final class AcademicRank extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property string $title
 * @property string|null $donor
 * @property string $year
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\AchievementFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereDonor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereUpdatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Achievement whereYear($value)
 */
	final class Achievement extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $entity_id
 * @property string $code
 * @property string $branch_en
 * @property string $branch_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\Entity $entity
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\BranchFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereBranchAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereBranchEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereEntityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Branch whereUpdatedBy($value)
 */
	final class Branch extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $category_en
 * @property string $category_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Employee> $employees
 * @property-read int|null $employees_count
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\CategoryFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCategoryAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCategoryEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereUpdatedBy($value)
 */
	final class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $category_id
 * @property int $employee_id
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryEmployee whereUpdatedBy($value)
 */
	final class CategoryEmployee extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $city_en
 * @property string $city_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\CityFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCityAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCityEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereUpdatedBy($value)
 */
	final class City extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $branch_id
 * @property string|null $code
 * @property string|null $college_en
 * @property string|null $college_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\Branch $branch
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\CollegeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereCollegeAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereCollegeEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|College whereUpdatedBy($value)
 */
	final class College extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $country_en
 * @property string $country_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\CountryFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereCountryAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereCountryEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Country whereUpdatedBy($value)
 */
	final class Country extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property string $name
 * @property \App\Enums\CourseType $status
 * @property string $issuer
 * @property \Carbon\CarbonImmutable $date_of_issue
 * @property string|null $period
 * @property string|null $city
 * @property int|null $country_id
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\CourseFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereCountryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereDateOfIssue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereIssuer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course wherePeriod($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Course whereUpdatedBy($value)
 */
	final class Course extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $department_en
 * @property string $department_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Branch> $branches
 * @property-read int|null $branches_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\College> $colleges
 * @property-read int|null $colleges_count
 * @property-read \App\Models\User|null $createdBy
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Employee> $employees
 * @property-read int|null $employees_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Entity> $entities
 * @property-read int|null $entities_count
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\DepartmentFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereDepartmentAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereDepartmentEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Department whereUpdatedBy($value)
 */
	final class Department extends \Eloquent {}
}

namespace App\Models{
/**
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentEmployee newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentEmployee newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentEmployee query()
 */
	final class DepartmentEmployee extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int|null $branch_id
 * @property int|null $college_id
 * @property int $department_id
 * @property int|null $entity_id
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\DepartmentHierarchyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereCollegeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereEntityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DepartmentHierarchy whereUpdatedBy($value)
 */
	final class DepartmentHierarchy extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property string $name
 * @property string $identification
 * @property \App\Enums\Gender $gender
 * @property \Carbon\CarbonImmutable $date_of_birth
 * @property string $relationship
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property \App\Enums\FamilyRelationship $releationship
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\Employee $employee
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\DependentFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereIdentification($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereRelationship($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Dependent whereUpdatedBy($value)
 */
	final class Dependent extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $code
 * @property int $user_id
 * @property int|null $head_id
 * @property string $first_name_en
 * @property string|null $middle_name_en
 * @property string|null $third_name_en
 * @property string $family_name_en
 * @property string $first_name_ar
 * @property string|null $middle_name_ar
 * @property string|null $third_name_ar
 * @property string $family_name_ar
 * @property \App\Enums\Gender $gender
 * @property \App\Enums\MaritalStatus|null $marital_status
 * @property int $nationality_id
 * @property \App\Enums\Religion|null $religion
 * @property string|null $home_country_id
 * @property \Carbon\CarbonImmutable $date_of_birth
 * @property int|null $place_of_birth
 * @property bool $is_active
 * @property bool $has_salary
 * @property bool $has_biometric
 * @property bool $works_on_saturday
 * @property \Carbon\CarbonImmutable $joining_date
 * @property \Carbon\CarbonImmutable|null $resignation_date
 * @property int|null $sponsorship_id
 * @property bool $has_married_contract
 * @property \App\Enums\VacationClass $vacation_class
 * @property \App\Enums\SpecialNeeds|null $special_needs
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read mixed $arabic_name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read \App\Models\User|null $createdBy
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Department> $departments
 * @property-read int|null $departments_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Dependent> $dependents
 * @property-read int|null $dependents_count
 * @property-read mixed $english_name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Extention> $extentions
 * @property-read int|null $extentions_count
 * @property-read Employee|null $head
 * @property-read \App\Models\Identification|null $nationalId
 * @property-read \App\Models\Country $nationality
 * @property-read \App\Models\Identification|null $passport
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Position> $positions
 * @property-read int|null $positions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Qualification> $qualification
 * @property-read int|null $qualification_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Qualification> $qualifications
 * @property-read int|null $qualifications_count
 * @property-read \App\Models\Sponsorship|null $sponsorship
 * @property-read \App\Models\User|null $updatedBy
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee active()
 * @method static \Database\Factories\EmployeeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereFamilyNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereFamilyNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereFirstNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereFirstNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereHasBiometric($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereHasMarriedContract($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereHasSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereHeadId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereHomeCountryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereJoiningDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereMaritalStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereMiddleNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereMiddleNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereNationalityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee wherePlaceOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereReligion($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereResignationDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereSpecialNeeds($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereSponsorshipId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereThirdNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereThirdNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereUpdatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereVacationClass($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Employee whereWorksOnSaturday($value)
 */
	final class Employee extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $extention_id
 * @property int $employee_id
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereExtentionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeeExtention whereUpdatedBy($value)
 */
	final class EmployeeExtention extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property int $position_id
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition wherePositionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EmployeePosition whereUpdatedBy($value)
 */
	final class EmployeePosition extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $entity_en
 * @property string $entity_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\EntityFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereEntityAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereEntityEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Entity whereUpdatedBy($value)
 */
	final class Entity extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $number
 * @property int $is_active
 * @property string|null $owner
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\ExtentionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereOwner($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Extention whereUpdatedBy($value)
 */
	final class Extention extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $faculty_en
 * @property string $faculty_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\FacultyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereFacultyAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereFacultyEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereUpdatedBy($value)
 */
	final class Faculty extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property \App\Enums\IdentificationType $type
 * @property string $id_number
 * @property string|null $place_of_issue
 * @property \Carbon\CarbonImmutable|null $date_of_issue
 * @property \Carbon\CarbonImmutable|null $date_of_expiry
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\IdentificationFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereDateOfExpiry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereDateOfIssue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereIdNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification wherePlaceOfIssue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Identification whereUpdatedBy($value)
 */
	final class Identification extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string|null $institution_en
 * @property string|null $institution_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\InstitutionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereInstitutionAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereInstitutionEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institution whereUpdatedBy($value)
 */
	final class Institution extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property string|null $profession
 * @property string|null $organization_name
 * @property string|null $city
 * @property int|null $country_id
 * @property string|null $department
 * @property string|null $section
 * @property \Carbon\CarbonImmutable|null $start_date
 * @property \Carbon\CarbonImmutable|null $end_date
 * @property string|null $functional_tasks
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\OtherExperienceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereCountryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereDepartment($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereFunctionalTasks($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereOrganizationName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereProfession($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereSection($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OtherExperience whereUpdatedBy($value)
 */
	final class OtherExperience extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $position_en
 * @property string $position_ar
 * @property int|null $entity_id
 * @property \App\Enums\PositionType|null $type
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Employee> $employees
 * @property-read int|null $employees_count
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\PositionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereEntityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position wherePositionAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position wherePositionEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Position whereUpdatedBy($value)
 */
	final class Position extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property \App\Enums\Qualification $qualification
 * @property string|null $thesis
 * @property int $major_id
 * @property int|null $minor_id
 * @property \App\Enums\Rating|null $rating
 * @property string|null $gpa
 * @property \App\Enums\GPAType|null $gpa_type
 * @property string|null $graduation_university
 * @property string|null $graduation_college
 * @property \Carbon\CarbonImmutable $graduation_date
 * @property string|null $city
 * @property int|null $graduation_country
 * @property \App\Enums\StudyNature|null $study_nature
 * @property bool $is_attested
 * @property bool $is_active
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\QualificationFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereGpa($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereGpaType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereGraduationCollege($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereGraduationCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereGraduationDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereGraduationUniversity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereIsAttested($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereMajorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereMinorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereQualification($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereStudyNature($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereThesis($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Qualification whereUpdatedBy($value)
 */
	final class Qualification extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $employee_id
 * @property \App\Enums\ResearchType|null $type
 * @property \App\Enums\ResearchStatus|null $status
 * @property \App\Enums\ResearchProgress|null $progress
 * @property \App\Enums\ResearchNature|null $nature
 * @property \App\Enums\ResearchDomain|null $domain
 * @property \App\Enums\ResearchCitation|null $citation
 * @property \App\Enums\ResearchLanguage|null $language
 * @property string|null $title
 * @property string|null $publication_location
 * @property \Carbon\CarbonImmutable|null $publication_date
 * @property string|null $publisher
 * @property string|null $edition
 * @property string|null $isbn
 * @property string|null $magazine
 * @property string|null $publishing_url
 * @property string|null $summary
 * @property string|null $key_words
 * @property string|null $pages_number
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\ResearchFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereCitation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereDomain($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereEdition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereIsbn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereKeyWords($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereLanguage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereMagazine($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereNature($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research wherePagesNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereProgress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research wherePublicationDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research wherePublicationLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research wherePublisher($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research wherePublishingUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereSummary($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Research whereUpdatedBy($value)
 */
	final class Research extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $section_en
 * @property string $section_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\SectionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereSectionAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereSectionEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Section whereUpdatedBy($value)
 */
	final class Section extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $specialty_en
 * @property string $specialty_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\SpecialtyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereSpecialtyAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereSpecialtyEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Specialty whereUpdatedBy($value)
 */
	final class Specialty extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $code
 * @property string $sponsorship_en
 * @property string $sponsorship_ar
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $createdBy
 * @property-read \App\Models\User|null $updatedBy
 * @method static \Database\Factories\SponsorshipFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereSponsorshipAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereSponsorshipEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Sponsorship whereUpdatedBy($value)
 */
	final class Sponsorship extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string|null $name
 * @property string $email
 * @property \Carbon\CarbonImmutable|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read User|null $createdBy
 * @property-read \App\Models\Employee|null $employee
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Role> $roles
 * @property-read int|null $roles_count
 * @property-read User|null $updatedBy
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User permission($permissions, $without = false)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User role($roles, $guard = null, $without = false)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User withoutPermission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User withoutRole($roles, $guard = null)
 */
	final class User extends \Eloquent {}
}

