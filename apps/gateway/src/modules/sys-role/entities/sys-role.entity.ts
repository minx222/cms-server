import { ObjectType, Field } from '@nestjs/graphql';

/**
 * 定义一个 GraphQL 对象类型 SysRole
 */
@ObjectType()
export class SysRole {
	/**
	 * @description 角色的唯一标识符
	 */
	@Field(() => String)
	id: string;

	/**
	 * @description 角色的名称
	 */
	@Field(() => String)
	name: string;

	/**
	 * @description 角色的代码标识
	 */
	@Field(() => String)
	code: string;

	/**
	 * @description 角色的描述信息（可选）
	 */
	@Field(() => String, { nullable: true })
	description?: string;

	/**
	 * @description 角色拥有的权限列表（可选）
	 */
	@Field(() => [String])
	permission?: string[];

	/**
	 * @description 角色创建的时间戳
	 */
	@Field(() => Date)
	createdAt: Date;

	/**
	 * @description 创建角色的用户的标识符
	 */
	@Field(() => String)
	createdBy: string;

	/**
	 * @description 角色最后更新的时间戳
	 */
	@Field(() => Date)
	updatedAt: Date;

	/**
	 * @description 更新角色的用户的标识符
	 */
	@Field(() => String)
	updatedBy: string;

	/**
	 * @description 标记角色是否已被删除
	 */
	@Field(() => Boolean)
	deleted: boolean;

	/**
	 * @description 角色被删除的时间戳（可选）
	 */
	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	/**
	 * @description 删除角色的用户的标识符（可选）
	 */
	@Field(() => String, { nullable: true })
	deletedBy?: string;
}
